// Run against the local server with Playwright available on NODE_PATH:
// NODE_PATH=/path/to/node_modules node --test tests/loading.cjs
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/';
async function setup(options={}) {
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 const context=await browser.newContext(options);const page=await context.newPage();
 await page.route('**/*',r=>new URL(r.request().url()).origin===new URL(url).origin?r.continue():r.abort());
 return {browser,page};
}
test('initial HTML shows feedback while the application bundle is pending',async()=>{
 const {browser,page}=await setup({viewport:{width:320,height:700}});
 try{await page.route('**/static/js/main.*.js',()=>{});await page.goto(url,{waitUntil:'domcontentloaded',timeout:2000}).catch(()=>{});
 assert.equal(await page.locator('#boot-loader').isVisible(),true);
 assert.equal(await page.locator('#static-portfolio').isVisible(),false);
 assert.equal(await page.locator('.boot-spinner').isVisible(),true);
 assert.ok((await page.locator('#boot-loader').boundingBox()).height>=700);
 assert.match(await page.locator('#boot-message').innerText(),/Loading portfolio/);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 }finally{await browser.close();}
});
test('main content becomes usable without waiting for images and secondary data',async()=>{
 const {browser,page}=await setup();try{
 await page.route('**/static/media/*',()=>{});await page.route('**/profile.json',()=>{});
 await page.goto(url,{waitUntil:'domcontentloaded'});
 await page.locator('#greeting').waitFor();
 await page.waitForFunction(()=>!document.querySelector('#boot-loader'));
 assert.equal(await page.locator('.splash-container').count(),0);
 assert.equal(await page.locator('#static-portfolio').count(),0);
 assert.equal(await page.locator('#root').isVisible(),true);
 }finally{await browser.close();}
});
test('failed bundle offers Retry and a successful retry clears the error',async()=>{
 const {browser,page}=await setup();try{
 await page.route('**/static/js/main.*.js',r=>r.abort());await page.goto(url,{waitUntil:'domcontentloaded'});
 await page.locator('#boot-retry').waitFor();assert.equal(await page.locator('#static-portfolio').isVisible(),true);assert.match(await page.locator('#boot-message').innerText(),/couldn’t load/i);
 await page.unroute('**/static/js/main.*.js');await page.locator('#boot-retry').click();
 await page.locator('#greeting').waitFor();await page.waitForFunction(()=>!document.querySelector('#boot-loader'));
 }finally{await browser.close();}
});
test('slow loading offers Retry but still recovers when the original request completes',async()=>{
 const {browser,page}=await setup();try{
 await page.clock.install();let release;const held=new Promise(r=>release=r);
 await page.route('**/static/js/main.*.js',async r=>{await held;await r.continue();});
 await page.goto(url,{waitUntil:'commit'});await page.locator('#boot-loader').waitFor();
 await page.clock.fastForward(15000);await page.locator('#boot-retry').waitFor();
 assert.match(await page.locator('#boot-message').innerText(),/longer than usual/i);
 assert.equal(await page.locator('#static-portfolio').isVisible(),true);
 release();await page.locator('#greeting').waitFor();await page.waitForFunction(()=>!document.querySelector('#boot-loader'));
 await page.clock.fastForward(30000);assert.equal(await page.locator('#boot-loader').count(),0);
 assert.equal(await page.locator('#static-portfolio').count(),0);
 }finally{await browser.close();}
});
test('JavaScript disabled shows an explanation instead of an endless spinner',async()=>{
 const {browser,page}=await setup({javaScriptEnabled:false});try{
 await page.goto(url,{waitUntil:'domcontentloaded'});
 assert.equal(await page.locator('#boot-loader').isVisible(),false);
 assert.match(await page.locator('noscript').innerText(),/JavaScript/);
 assert.equal(await page.locator('#static-portfolio').isVisible(),true);
 assert.match(await page.locator('#static-portfolio').innerText(),/EasyEyes/);
 assert.equal(await page.locator('.project-feature').count(),0);
 }finally{await browser.close();}
});
test('required stylesheet failure offers Retry instead of exposing an unstyled page',async()=>{
 const {browser,page}=await setup();try{
 await page.route('**/static/css/main.*.css',r=>r.abort());await page.goto(url,{waitUntil:'domcontentloaded'});
 await page.locator('#boot-retry').waitFor();assert.equal(await page.locator('#boot-loader').isVisible(),true);
 assert.match(await page.locator('#boot-message').innerText(),/couldn’t load/i);
 assert.equal(await page.locator('#static-portfolio').isVisible(),true);
 }finally{await browser.close();}
});
for (const width of [320, 1280]) {
 test(`HTML portfolio and project are readable without JavaScript at ${width}px`,async()=>{
  const {browser,page}=await setup({javaScriptEnabled:false,viewport:{width,height:800}});
  try {
   await page.goto(url,{waitUntil:'domcontentloaded'});
   assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://khahani.com/');
   const profile=JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
   assert.equal(profile.mainEntity.name,'Mohammadreza Khahani');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
   assert.equal(await page.locator('#static-portfolio h1').isVisible(),true);
   await page.goto(new URL('/projects/easyeyes/',url).href,{waitUntil:'domcontentloaded'});
   assert.match(await page.locator('h1').innerText(),/EasyEyes/);
   assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://khahani.com/projects/easyeyes/');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
   await page.screenshot({path:`/tmp/portfolio-seo-project-${width}.png`,fullPage:true});
   await page.locator('nav a[href="/"]').click();
   assert.equal(await page.locator('#static-portfolio h1').isVisible(),true);
   await page.screenshot({path:`/tmp/portfolio-seo-summary-${width}.png`,fullPage:true});
  }finally{await browser.close();}
 });
}
test('enhancement keeps a fresh visitor at the top of the portfolio',async()=>{
 const {browser,page}=await setup({viewport:{width:1280,height:900}});
 try {
  await page.route('**/static/js/main.*.js',async r=>{await new Promise(resolve=>setTimeout(resolve,500));await r.continue();});
  await page.goto(url,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>!document.querySelector('#boot-loader'));
  await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.evaluate(()=>scrollY),0);
 }finally{await browser.close();}
});
