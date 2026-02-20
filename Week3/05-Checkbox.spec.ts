/* Develop a Playwright script to test interactions with checkboxes on the LeafGround "Checkbox" 
page, covering scenarios like multiple selections, checking default states, and handling disabled 
checkboxes.  */

import {expect, test} from "@playwright/test"

test('Verify the checkbox functionalities', async({page})=> {
await page.goto(`https://leafground.com/checkbox.xhtml`)

// 2. Click on the "Basic Checkbox.” 
await page.locator('.ui-chkbox-label', {hasText: 'Basic'}).click()
// await page.locator(`//span[contains(text(),"Basic")]`).click()

// 3. Click on the "Notification Checkbox." 
await page.locator('.ui-chkbox-label', {hasText: 'Ajax'}).click()

// 4. Verify that the expected message is displayed.
const message = page.locator('.ui-growl-title', {hasText: 'Checked'})
await expect(message).toBeVisible()

// 5. Click on your favorite language (assuming it's related to checkboxes).
const fav_lang =  '//tbody/tr/td/label'
// await page.locator(`$//tbody/tr/td/label[text()='Java']`).click()
await page.locator(`${fav_lang}[text()='Java']`).click()
await page.locator(`${fav_lang}[text()='Python']`).click()
await page.locator(`${fav_lang}[text()='Javascript']`).click()
await page.locator(`${fav_lang}[text()='C-Sharp']`).click()
await page.locator(`${fav_lang}[text()='Others']`).click()

// 6. Click on the "Tri-State Checkbox." 
const tri_state = `//div[contains(@data-iconstates, 'ui-icon-closethick')]`
await page.locator(tri_state).click()

// Verify which tri-state option has been chosen at first 
const tri_state_msg1 = page.locator(`.ui-growl-message>p`, {hasText: 'State = 1'})
const tri_state_msg2 = page.locator(`.ui-growl-message>p`, {hasText: 'State = 2'})
const tri_state_msg3 = page.locator(`.ui-growl-message>p`, {hasText: 'State = 0'})
await expect(tri_state_msg1).toBeVisible()

//  Click on the "Tri-State Checkbox." and  Verify which tri-state 2nd option
await page.locator(tri_state).click()
await expect(tri_state_msg2).toBeVisible()


// 7. Click on the "Tri-State Checkbox." and  Verify which tri-state 3rd option
await page.locator(tri_state).click()
await expect(tri_state_msg3).toBeVisible()

// 8. Click on the "Toggle Switch." 
await page.locator(`.ui-toggleswitch-slider`).click()

// 9. Verify that the expected message is displayed. 
const toggle_msg = page.locator(`.ui-growl-title`, {hasText: 'Checked'})
await expect(toggle_msg).toBeVisible({timeout:3000})
// 10. Verify if the Checkbox is disabled. 
const disable_box =  page.getByLabel('Disabled')
await expect(disable_box).toBeDisabled()
// 11. Select multiple options on the page (details may be needed). 
await page.locator(`//ul[@data-label="Cities"]`).click()
const listoption =  `//ul[@role="group"]/li/div/div[2]`
const listcount = await page.locator(`${listoption}`).count()
// await page.locator(`${listoption}`).nth(0).click()

console.log(listcount);

// 12. Perform any additional actions or verifications required. 
for (let i=0; i<listcount; i++){
    await page.locator(`${listoption}`).nth(i).click()
    const  text = await page.locator(`${listoption}/ancestor::li`).nth(i).innerText()
    console.log(`Selected Option No- ${i+1} is ${text} `);
}

// 13. Close the web browser when done. 
await page.waitForTimeout(3000)
await page.close()

})