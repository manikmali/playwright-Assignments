import {expect, test} from "@playwright/test"

test('Edit an Individuals in Salesforce', async ({page}) => {
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


//Search the created Individual
await page.waitForTimeout(2000)
await page.locator(`input[aria-label="Search this list..."]`).fill('Manikandan')
await page.keyboard.press('Enter')

//Click on Edit button
await page.locator(`//td[contains(@data-col-key-value, "ListViewRowLevelAction")]//button`).nth(0).click()
await page.locator(`a[title="Edit"]`).click()
await page.waitForTimeout(2000)

//Select the Salutation
await page.locator(`(//a[@role="combobox"])[1]`).click()
await page.locator(`//a[text()='Mrs.']`).click()

//Now entering the First Name
await page.getByPlaceholder("First Name",{exact: true}).fill("R")
await page.getByPlaceholder("Last Name",{exact: true}).clear()
await page.getByPlaceholder("Last Name",{exact: true}).fill("Rama")

//Click on Save button
await page.locator(`//span[text()='Save']`).click()

//Verify the toast message is visible
const toast_msg = page.locator('.slds-hyphenate>div>span')
await expect(toast_msg).toBeVisible()
await page.waitForTimeout(2000)


})