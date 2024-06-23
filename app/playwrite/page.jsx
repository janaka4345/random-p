
import { webkit } from "playwright"


export default async function page() {
    let t=''
        const browser = await webkit.launch();
        const page = await browser.newPage();
        await page.goto('https://github.com/janaka4345/3d-portfolio');
        await page.waitForTimeout(5000); // Wait for 5 seconds

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
   t=await page.innerHTML('html')
//   console.log(t);

  await browser.close();
  return (
    <>
    <div>
        <div dangerouslySetInnerHTML={{__html: t}}></div>
    </div>
    
    </>

  )
}