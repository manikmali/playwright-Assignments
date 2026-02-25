var APIClient = /** @class */ (function () {
    function APIClient() {
    }
    APIClient.prototype.sendRequest = function (endpoint, requestBody, requestStatus) {
        console.log('Default Endpoint URL is ', endpoint);
        if (requestBody != undefined) {
            console.log("Requesting JSON data is ".concat(requestBody, " "));
            if (requestStatus == false) {
                console.log("Received a failure response !");
            }
            else if (requestStatus) {
                console.log("Successfully received the response from server");
            }
        }
        console.log("----------------------------------------");
    };
    return APIClient;
}());
var ApiObj = new APIClient();
var endPoint = "/serviceName/Sobjects/Lead";
var jsonData = ' { "Username" : "testname", "Password": "abc123" }';
ApiObj.sendRequest(endPoint);
ApiObj.sendRequest(endPoint, jsonData);
ApiObj.sendRequest(endPoint, jsonData, true);
