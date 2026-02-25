export class BasePage {

element_find = "Hint Message"
element_type = "Submit Button"

findElement(searchElement: string) {
return searchElement = this.element_find
}

 clickElement(element: string) {
return element = this.element_type
 }

enterText() {
console.log(`Good to understand the concepts`);
 }


performCommonTasks(element_type: string) {
console.log(`${this.clickElement(element_type)} has not been clicked yet`);
}
    
}

const base_obj = new BasePage()
base_obj.performCommonTasks(base_obj.element_type)