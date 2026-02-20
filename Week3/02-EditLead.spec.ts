import {expect, test} from "@playwright/test"

test('Create a Lead in Salesforce', async ({page}) => {
await page.goto ("https://login.salesforce.com/?locale=in")

//login to salesforce
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('#Login').click()

await page.locator(`//button[@title="App Launcher"]/div`).click()

//Click view all and click sales from App Launcher
await page.waitForTimeout(3000)
await page.locator(`//button[@aria-label="View All Applications"]`).click()
await page.locator(`//p[text()="Sales"]`).click()

//Navigate to the Leads tab
await page.locator(`a[title="Leads"]`).click()

//Search the created Lead
await page.locator(`input[aria-label="Search this list..."]`).fill('Manikandan')
await page.keyboard.press('Enter')

//Click on Edit button
await page.locator(`//td[contains(@data-col-key-value, "ListViewRowLevelAction")]//button`).nth(0).click()
await page.locator(`a[title="Edit"]`).click()
await page.waitForTimeout(2000)

//Update the necessary fields (e.g., Salutation, Last Name, or Company Name)
await page.locator(`button[aria-label="Salutation"]`).click()
await page.locator(`span>span[title="Dr."]`).click()
await page.locator(`input[name="lastName"]`).clear()
await page.locator(`input[name="lastName"]`).fill('ManikanM')
await page.locator(`input[name="Company"]`).clear()
await page.locator(`input[name="Company"]`).fill('Playwright')
await page.locator(`button[name="SaveEdit"]`).click()

//Verify the toast message is visible
const toast_msg = page.locator('.slds-hyphenate>div>span')
await expect(toast_msg).toBeVisible()

await page.waitForTimeout(5000)


})
