const {test}=require('node:test');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/';

test('portfolio exposes named social links and a coherent heading structure in both themes',async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 try {
  for (const colorScheme of ['light','dark']) {
   const context=await browser.newContext({colorScheme,viewport:{width:390,height:844}});
   const page=await context.newPage();
   await page.route('**/*',r=>new URL(r.request().url()).origin===new URL(url).origin?r.continue():r.abort());
   await page.goto(url,{waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>!document.querySelector('#boot-loader'));
   assert.equal(await page.getByRole('main').count(),1);
   for (const name of ['GitHub profile','LinkedIn profile','Email','Medium profile','Stack Overflow profile']) {
    assert.ok(await page.getByRole('link',{name,exact:true}).count()>0,`${colorScheme}: ${name}`);
   }
   const headings=await page.locator('#root h1, #root h2, #root h3, #root h4, #root h5, #root h6').evaluateAll(nodes=>nodes.map(n=>({level:Number(n.tagName[1]),text:n.textContent.trim()})));
   assert.equal(headings[0].level,1);
   for(let i=1;i<headings.length;i++) assert.ok(headings[i].level<=headings[i-1].level+1,`${colorScheme}: ${headings[i].text}`);
   await context.close();
  }
 } finally {await browser.close();}
});
