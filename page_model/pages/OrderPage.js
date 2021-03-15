import {Selector, t} from 'testcafe'

class OrderPage{

    constructor(){
        this.SummaryQuantity = Selector('div.summary_quantity')
        this.FinishBtn=Selector('a.btn_action')
        this.OrderMsj= Selector('div.complete-text')

    }
    async clickOnFinishBtn(){
        await t
        .click(this.FinishBtn);
    }
    
}
    export default new OrderPage();