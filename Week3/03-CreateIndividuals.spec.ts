import {expect, test} from "@playwright/test"

test('Create an Individual in Salesforce', async ({page}) => {
await page.goto ("https://login.salesforce.com/?locale=in")

//login to salesforce
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('#Login').click()

await page.locator(`//button[@title="App Launcher"]/div`).click()

//Click view all and click sales from App Launcher
await page.waitForTimeout(3000)
await page.locator(`//button[@aria-label="View All Applications"]`).click()

//Click Individuals from App Launcher
await page.waitForTimeout(2000)
await page.locator(`//p[text()="Individuals"]`).click()
await page.waitForTimeout(3000)
await page.locator(`div[title="New"]`).click()

//Select the Salutation
await page.locator(`(//a[@role="combobox"])[1]`).click()
await page.locator(`//a[text()='Mr.']`).click()
await page.getByPlaceholder("Last Name",{exact: true}).fill("Manikandan")

//Click on Save button
await page.locator(`//span[text()='Save']`).click()

//Verify the toast message is visible
const toast_msg = page.locator('.slds-hyphenate>div>span')
await expect(toast_msg).toBeVisible()
await page.waitForTimeout(2000)

//Verify the title of newly created individuals
const title_check = page.locator(`//div[contains(@title, "Manikandan")]`)
await expect(title_check).toBeVisible()

await page.waitForTimeout(2000)


})
