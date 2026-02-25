import {BasePage} from "./03-demomethodoverriding"

class LoginPage extends BasePage {

element_type = "Check Box"

performCommonTasks(element_type: string) {
console.log(`${this.element_find} has been found`);
console.log(`${element_type} has been clicked successffuly`);
this.enterText()
}


}

const sub_ob = new LoginPage()
console.log("-----------------------------------");
console.log("-----------------------------------");


sub_ob.performCommonTasks(sub_ob.element_type)