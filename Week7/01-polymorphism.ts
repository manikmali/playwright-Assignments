import { notEqual } from "node:assert";

class overLoading {

public reportStep(message:string):void
public reportStep(message:string, status:string):void
public reportStep(message:string, status:string, takeSnapshot:boolean):void


reportStep(message: string, status?: string, takeSnapshot?: boolean) {
    console.log("Hello! ", message);

    if (status != undefined) {
        console.log(`Current Status is ${status}`);
    }

    if (takeSnapshot == false) {
        console.log("Please don't take the Snapshot");
    } 
    else if (takeSnapshot) { console.log("Please take the Snapshot") }        
        console.log(`================================`);
    
}

}
const ob = new overLoading()

ob.reportStep('Manikandan')
ob.reportStep('Manikandan','Fail')
ob.reportStep('Manikandan','Pass',true)