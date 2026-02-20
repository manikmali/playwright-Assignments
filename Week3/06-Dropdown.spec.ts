import {expect, test} from "@playwright/test"
import { AssertionError } from "node:assert/strict"
import { isDeepStrictEqual } from "node:util"

test(`Verify the Dropdown options`, async({page})=> {
// 1. Navigate to Leafground URL
await page.goto(`https://leafground.com/select.xhtml`)

// 2. Select your favorite UI automation tool using the different select options 
await page.selectOption('select.ui-selectonemenu',{label: 'Playwright'})

// 3. Get the count and print of all the values 
await page.locator(`select.ui-selectonemenu`).click()
const fav_tool = page.locator(`select.ui-selectonemenu>option`)
const fav_count = await fav_tool.count()
for (let i=0; i<fav_count; i++) {
const fav_text = await fav_tool.nth(i).innerText()
console.log(fav_text);
}

// 4. Choose your preferred Country 
await page.locator(`//label[text()='Select Country']`).click()
await page.locator(`//ul[@role="listbox"]/li`, {hasText: 'India'}).click()
const country_locator = page.locator(`//label[contains(@id,'country_label')]`)
expect.soft (await country_locator.innerText()).toBe('India')

const countryandcities = 
    { "India" : [ 'Bengaluru', 'Chennai', 'Delhi' ],
    "Brazil": [ 'Rio de Janerio','Salvador','Sao Paulo'],
    "Germany" : [ 'Berlin','Frankfurt','','Munich']
    }

// 5. Confirm Cities belongs to Country is loaded
expect (page.locator(`//label[contains(@id,'city_label')]`)).toBeVisible()
await page.locator(`//label[text()='Select City']`).click()
await page.waitForSelector(`//div[contains(@id, 'city_panel')]`)
var cities = await page.locator(`//ul[contains(@id, 'city_items')]/li`).allInnerTexts()
const finalized_cities = cities.slice(1)
console.log(finalized_cities);
console.log('\n');
console.log(countryandcities.India);

//Select the city as Chennai
await page.locator(`//li`,{hasText: 'Chennai'}).click()


if (isDeepStrictEqual(finalized_cities,countryandcities.India )) {
 console.log('Cities belongs to the selected country');
}
else {
     console.log('Warning! - Cities are not belongs to the selected country');
}

// 6. Choose any three courses from the dropdown
await page.locator(`button[aria-label="Show Options"]`).click()
await page.waitForSelector('span[role="listbox"]')
await page.locator(`span[role="listbox"]>ul>li`, {hasText: 'Playwright'}).click()

await page.locator(`button[aria-label="Show Options"]`).click()
await page.waitForSelector('span[role="listbox"]')
await page.locator(`span[role="listbox"]>ul>li`, {hasText: 'Selenium WebDriver'}).click()

await page.locator(`button[aria-label="Show Options"]`).click()
await page.waitForSelector('span[role="listbox"]')
await page.locator(`span[role="listbox"]>ul>li`, {hasText: 'PostMan'}).click()
await page.keyboard.press('Tab')

// 7. Choose a language and print all the values from the dropdown.
await page.keyboard.press('Tab')
await page.locator(`//div[contains(@aria-owns,'lang_items')]`).click()
const languages = page.locator(`//ul[@role="listbox"][contains(@id,'lang_items')]/li`)

const all_langs = await languages.allInnerTexts()
console.log(all_langs);  //Print all languages in array

const total_langs = await languages.count()
for (let j = 1; j<total_langs; j++){
const lang = await languages.nth(j).innerText()  //Print all languages one by one
console.log(lang);
}

//Select the language as Tamil
await page.locator(`//ul[@role="listbox"]/li`, {hasText: 'Tamil'}).click()

//Verify the selected language is displayed
const actual_lang = await page.locator(`//label[contains(@id,'lang_label')]`).innerText()
expect.soft(actual_lang).toBe('Tamil')

// 8. Select 'Two' irrespective of the language chosenTamil
expect (page.locator(`//ul[contains(@id,'value_items')]`)).toBeVisible()
await page.locator(`//div/div/label[text()='Select Values']`).click()
await page.locator(`//ul/li[text()='இரண்டு']`).click()

// 9. Close the web browser when done. 
await page.waitForTimeout(2000)
await page.close()

})
