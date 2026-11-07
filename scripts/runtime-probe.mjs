import { chromium } from '@playwright/test'
import { execFileSync } from 'node:child_process'
const url = process.env.DSH_TEST_URL || 'http://127.0.0.1:63556'
const cookies = JSON.parse(execFileSync('python3', ['-c', `import sqlite3,json
c=sqlite3.connect('file:/Users/dangtruongan/Library/Application Support/@deepseek-ai/dsh-desktop/Cookies?mode=ro',uri=True)
print(json.dumps([{'name':n,'value':v,'domain':h,'path':'/'} for h,n,v in c.execute('select host_key,name,value from cookies') if h=='127.0.0.1']))`], {encoding:'utf8'}))
const browser = await chromium.launch({channel:'chrome',headless:true})
try {
 const context = await browser.newContext()
 await context.addCookies(cookies)
 const page = await context.newPage()
 page.on('pageerror', e => console.log('PAGEERROR', e.message))
 page.on('console', m => {if(m.type()==='error'||m.type()==='warning'||m.text().startsWith('FTS_RESULT')) console.log('CONSOLE',m.type(),m.text().slice(0,2000))})
 await page.goto(url)
 await page.getByRole('button', {name:'Search sessions',exact:true}).waitFor({timeout:20000})
 console.log('SEARCH BUTTON READY')

 await page.getByRole('button',{name:'Search sessions',exact:true}).click()
 await page.getByRole('dialog',{name:'Universal Palette',exact:true}).waitFor({timeout:5000})
 console.log('PALETTE VISIBLE')
 const search = page.getByRole('combobox', {name:'Search commands, sessions, models, history…'})
 await search.fill('ripgrep')
 try { await page.locator('[role="option"][data-kind="conversation-hit"]').first().waitFor({timeout:20000}) }
 catch(error) { console.log('DIALOG',await page.getByRole('dialog',{name:'Universal Palette',exact:true}).innerText()); throw error }
 console.log('FULL TEXT HIT COUNT',await page.locator('[data-kind="conversation-hit"]').count())
 await page.screenshot({path:'/tmp/palette-runtime/verified.png'})
 await search.press('Escape')
 await page.getByRole('dialog',{name:'Universal Palette',exact:true}).waitFor({state:'hidden'})
 await page.keyboard.press('Meta+k')
 await page.getByRole('dialog',{name:'Universal Palette',exact:true}).waitFor({timeout:5000})
 console.log('CMD K VISIBLE')

} finally {await browser.close()}
