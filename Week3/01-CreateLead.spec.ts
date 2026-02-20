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


//click on leads tab and click on New button
await page.locator(`a[title="Leads"]`).click()
await page.locator(`div[title="New"]`).click()

//Select Salutation dropdown
await page.waitForTimeout(3000)
await page.locator(`button[aria-label="Salutation"]`).click()
await page.locator(`lightning-base-combobox-item[data-value="Mr."]`).click()

//Enter the Last Name
await page.locator(`input[name="lastName"]`).fill("Manikandan")

//Enter the Company  Name
await page.locator(`input[name="Company"]`).fill("TestLeaf")

//Click Save
await page.locator(`button[name="SaveEdit"]`).click()

//Verify the leads Name Created
const verify_Lead = page.locator(`lightning-formatted-name[slot="primaryField"]`)
await expect (verify_Lead).toContainText("Manikandan")

})