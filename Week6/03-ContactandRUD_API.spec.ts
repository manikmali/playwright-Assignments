import {test, expect} from "@playwright/test"

let url: any
let token: any
let tokenType: any
let Fname = 'Manikandan'
let Lname = 'M'
let accname = 'Credits'
let id: any

test.use({storageState: `Data/login_Salesforce.json`})

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


test(`Create a New contact in Salesforce`, async({page})=> {

await page.goto(`${url}/lightning/n/devedapp__Welcome`)

// Click on Global actions button
await page.locator(`//div/a[contains(@class, "globalCreateTrigger")]`).click()
await page.locator(`//span[text()='New Contact']`).click()

await page.waitForTimeout(3000)

await page.getByRole('combobox', {name: 'Salutation'}).click()
await page.locator(`//div/ul//li/a[contains(text(), 'Mr.')]`).click()

// Enter First Name
await page.getByRole(`textbox`, {name: 'First Name'}).fill(Fname)

// Enter Last Name
await page.getByRole(`textbox`, {name: 'Last Name'}).fill(Lname)

// Enter email
await page.getByRole(`textbox`, {name: 'Email'}).fill('manikanm1982@gmail.com')

// Create a New Account for Account Name
await page.getByRole('combobox', {name: 'Account Name'}).click()
await page.locator(`//span[@title="New Account"]`).click()

// Enter account name as 'Credits' and save
await page.getByRole('textbox', {name: 'Account Name *'}).fill(accname)
await page.locator(`//div[@class="modal-footer slds-modal__footer"]/div/button[2]/span`).click() // Click on Save button


let toast_message = page.locator(`//span[contains(@class, "toastMessage")]`)
expect (toast_message).toBeVisible()
let toast_content = await toast_message.innerText()
console.log(toast_content);
expect (toast_content).toContain(accname)
await page.waitForTimeout(3000)

// Click and save 
await page.getByRole('button', {name: 'Save'}).click()

// Verify contact using Unique name and print the name
toast_message = page.locator(`//span[contains(@class, "toastMessage")]/a/div`)
expect (toast_message).toBeVisible()

toast_content = await toast_message.innerText()
console.log(toast_content);
expect (toast_content).toContain(Fname)

await page.waitForTimeout(3000)

})




test(`Retrieve the created contact details from Salesforce`, async({request})=> {
    const response = await request.get(`${url}/services/data/v59.0/sobjects/Contact/`, {
    headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${token}`
         }

    })

    expect(response.status()).toBe(200)
    const response_body = await response.json()

    console.log(response_body);        
    id = response_body.recentItems[0].Id   
    console.log(id);
})


test(`Update the created contact details from Salesforce`, async({request})=> {
    const response = await request.patch(`${url}/services/data/v59.0/sobjects/Contact/${id}`, {
    headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${token}`
         },

    data: {
         "Phone" : "9999999999" ,
         "Email" : "modified@gmail.com",
         "Title" : "Testing",
         "Department" : "Playwright"
    }

    })
    expect(response.status()).toBe(204) 
})


test(`Delete the created contact details from Salesforce`, async({request})=> {
    const response = await request.delete(`${url}/services/data/v59.0/sobjects/Contact/${id}`, {
    headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${token}`
         }

    })
    expect(response.status()).toBe(204) 
})


})