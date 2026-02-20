import {expect, test} from "@playwright/test"
let crid : any
let instance_url = 'https://dev267889.service-now.com/api/now/table/'

test.describe.serial('Verify the CRUD operations of Change request API', ()=> {

test(`Create change request using Playwright API`, async({request})=> {
    const response = await request.post(`${instance_url}change_request`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4"
        },

        data: {
            
            "requested_by": "System Administrator",
            "category": "Other",
            "priority": "4",
            "risk": "3",
            "impact": "3",
            "chg_model": "",
            "type": "standard",
            "state": "-2",
            "conflict_status": "Not Run",
            "short_description": "Manikandan created request from Playwright API",
            "implementation_plan": "-- Physically check the Playwright request\n-- Ensure that request got created and verify\n"
            } 

        } ) 

        const response_body = await response.json()
        console.log(response_body);
        crid = response_body.result.sys_id
        expect (response.status()).toBe(201)
        console.log(response.statusText());        

    })


test(`Retrieve change request using Playwright API`, async({request})=> {
    const response = await request.get(`${instance_url}change_request/${crid}`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4"
        }

        } ) 

        const response_body = await response.json()
        console.log(response_body);
        expect (response.status()).toBe(200)
        console.log(response.statusText());        

    })

test(`Modify change request using Playwright API`, async({request})=> {
    const response = await request.patch(`${instance_url}change_request/${crid}`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4"
        },

        data: {

            "risk": "2",
            "short_description": "Manikandan modified request from Playwright API",
            "implementation_plan": "-- Physically check the modified Playwright request\n-- Ensure that request got created and verify\n"

        }

        } ) 

        const response_body = await response.json()
        console.log(response_body);
        expect (response.status()).toBe(200)
        console.log(response.statusText());        

    })

test(`Delete change request using Playwright API`, async({request})=> {
    const response = await request.delete(`${instance_url}change_request/${crid}`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4"
        }
        } ) 

        expect (response.status()).toBe(204)
        console.log(response.statusText());        

    })

    })