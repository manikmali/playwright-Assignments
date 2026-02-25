
class APIClient {
public sendRequest(endpoint: string) : void
public sendRequest(endpoint: string, requestBody: string): void
public sendRequest(endpoint: string, requestBody: string, requestStatus: Boolean) : void

sendRequest(endpoint: string, requestBody?: string, requestStatus?: Boolean) {

    console.log('Default Endpoint URL is ', endpoint);  
    
    if (requestBody != undefined) {
    console.log(`Requesting JSON data is ${requestBody} `);
        if (requestStatus == false) {
            console.log("Received a failure response !");
        } else if (requestStatus) {
            console.log("Successfully received the response from server");
        } 
    }
    console.log("----------------------------------------");
    
}

}

const ApiObj = new APIClient()
const endPoint = "/serviceName/Sobjects/Lead"
const jsonData = ' { "Username" : "testname", "Password": "abc123" }'

ApiObj.sendRequest(endPoint )
ApiObj.sendRequest(endPoint, jsonData)
ApiObj.sendRequest(endPoint, jsonData, true )