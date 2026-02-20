import { test, expect } from "@playwright/test"
import { log } from "node:console"

test.use({storageState:`Data/login_Salesforce.json`})

let case_id: any
let token: any
let tokenType: any
let url: any
let case_no: any

test.describe.serial(`Weekly Assignment for Case in SalesForce App`, async() => {

test(`Generate Token for Salesforce Case`, async ({ request }) => {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`, {

        headers: { "Content-Type": "application/x-www-form-urlencoded" },

        form: {
            "grant_type": "password",
            "client_id": "3MVG9dAEux2v1sLtXxxVJa_l0i7rgtPvd2kBIlz.zX_hFmc1CSSaGpsZC8MQmBC0Ji5CV5SpcnWRbNzLJ.BPO",
            "client_secret": "5BB05706DF142B44CD3D3A21F1CFE29D38C4A11F66284E7D0C41E7ED7101A444",
            "username": "manikanm1982.6b0f38022660@agentforce.com",
            "password": "Msa@1710r1EFAcFl53nXBNt59PLVm6u0"
        }
    })

    expect(response.status()).toBe(200)
    const response_body = await response.json()
    console.log(response_body);

    url = response_body.instance_url
    tokenType = response_body.token_type
    token = response_body.access_token

})


test(`Create a New Case using API`, async ({ request }) => {

    const response = await request.post(`${url}/services/data/v62.0/sobjects/Case`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         },

        data: {
            "status": "Escalated",
            "Origin": "Email"
        }
    })

    expect(response.status()).toBe(201)
    const response_body = await response.json()
    console.log(response_body);

    case_id = response_body.id

})


test(`Retrieve the created New Case using API`, async ({ request }) => {

    const response = await request.get(`${url}/services/data/v62.0/sobjects/Case/${case_id}`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
    })

    expect(response.status()).toBe(200)
    const response_body = await response.json()
    console.log(response_body);
    case_no = response_body.CaseNumber

})


test(`Test to Update the case via Web App`, async({page})=> {

    await page.goto(`https://orgfarm-d1030bcfc8-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`)
   
    await page.getByTitle('App Launcher', {exact: true}).click()
    await page.waitForTimeout(5000)

    await page.getByRole('listbox', {name: 'Apps'}).isVisible()
    await page.getByRole('button', {name: 'View All Applications'}).click()

    await page.waitForTimeout(2000)
    await page.locator(`//p[text()='Cases']`).click()

    await page.waitForTimeout(2000)

    await page.getByRole('searchbox', {name: 'Search this list...'}).fill(`${case_no}`)
    await page.keyboard.press('Enter')

    await page.waitForTimeout(3000)

    await page.getByRole(`button`, {name: 'Show Actions'}).click()
    await page.locator(`a[title="Edit"]`).click()
    await page.waitForTimeout(4000)

    //Status Dropdown
    await page.getByRole('combobox', {name: 'Status'}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value="Working"]`).click()

    const status_value =  await page.getByRole('combobox', {name: 'Status'}).innerText()
    console.log(status_value);
    
    expect(status_value).toBe("Working")

    //Priority Dropdown
    await page.getByRole('combobox', {name: 'Priority'}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value="Low"]`).click()

    //Case Origin dropdown
    await page.getByRole('combobox', {name: 'Case Origin'}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value="Phone"]`).click()

    //SLA Violation dropdown
    await page.getByRole('combobox', {name: 'SLA Violation'}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value="No"]`).click()

    // Click on Save Button
    await page.getByRole('button', {name: 'Save', exact: true}).click()

    // Verify the toast message
    const toast_message = page.locator(`//div/span[contains(@class, "toastMessage")]`)
    expect (toast_message).toBeVisible()
    const toast_content = await toast_message.innerText()
    console.log(toast_content);
    

    // expect (toast_content).toContain(`was saved`)
    await page.waitForTimeout(2000)

    await page.getByRole('searchbox', {name: 'Search this list...'}).fill(`${case_no}`)
    await page.keyboard.press('Enter')

    const saved_status = await page.locator(`//td[@data-label="Status"]/span/div//span`).innerText()
    console.log(status_value);
    console.log(saved_status);
    
    //Verify the status value after updation
    expect (saved_status).toEqual(`${status_value}`)

    await page.waitForTimeout(5000)
    // await page.close()

})

test(`Delete the created case using API`, async({request})=> {
const response = await request.delete(`${url}/services/data/v62.0/sobjects/case/${case_id}`, {
headers: {"Authorization": `Bearer ${token}` }


})
expect (response.status()).toBe(204)
console.log('Requested Case has been deleted');

})

})