const {test}=require('node:test');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/';
// Real compiled React component; only the external Twitter API is controlled.
for(const mode of ['stalled','success','rejected','blocked','late']) {
 test(`Twitter ${mode}: loading terminates and later callbacks cannot restore a failed embed`,async()=>{
  const browser=await chromium.launch({headless:true,channel:'chrome'});
  try {
   const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.route('**/*',r=>new URL(r.request().url()).origin===new URL(url).origin?r.continue():r.abort());
   if(mode!=='blocked') await page.route('https://platform.twitter.com/widgets.js',r=>r.fulfill({contentType:'application/javascript',body:`window.twttr={widgets:{createTimeline:function(source,container){
    const frame=document.createElement('iframe');frame.title='Twitter Timeline';frame.style.cssText='visibility:hidden;width:0;height:0';container.appendChild(frame);
    return new Promise((resolve,reject)=>{window.finishTwitter=()=>{frame.style.cssText='width:300px;height:200px';resolve(frame)};${mode==='success'?'window.finishTwitter();':mode==='rejected'?"reject(new Error('Unavailable'));":''}});
   }}};`}));
   await page.clock.install();await page.goto(url,{waitUntil:'domcontentloaded'});await page.locator('#twitter').waitFor();
   if(mode!=='blocked') await page.waitForFunction(()=>window.finishTwitter);
   await page.clock.fastForward(11000);
   await page.waitForFunction(()=>!document.querySelector('#twitter .sk-circle'),{},{timeout:2000});
   if(mode==='success') {assert.equal(await page.locator('#twitter iframe').isVisible(),true);assert.equal(await page.locator('#twitter a').count(),0);}
   else {
    assert.equal(await page.locator('#twitter a').getAttribute('href'),'https://x.com/MrKhahani');
    assert.equal(await page.locator('#twitter iframe').count(),0);
    if(mode==='late'){await page.evaluate(()=>window.finishTwitter());await page.clock.fastForward(1000);assert.equal(await page.locator('#twitter a').isVisible(),true);}
   }
   assert.deepEqual(errors,[]);
  }finally{await browser.close();}
 });
}
