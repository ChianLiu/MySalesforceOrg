/*
 * @author: Chian
 * @Description: 
 * @Date: 2021-03-26 11:26:28
 * @LastEditTime: 2021-03-26 11:27:01
 */
import { LightningElement,track } from 'lwc';

export default class MyTestVariable extends LightningElement {
    @track greeting = 'World';
    @track showDetail = false;
    @track historyList = new Array();

    handleChange(event) {
        this.greeting = event.target.value;
        if(this.greeting.toLocaleLowerCase() === 'xx') {
            this.showDetail = true;
        } else {
            this.showDetail = false;
        }
    }

    logHistory(event) {
        const previousHistoryValue = this.historyList.length > 0 ? this.historyList[this.historyList.length - 1].Name : '';
        const previousHistoryId = this.historyList.length > 0 ? this.historyList[this.historyList.length - 1].Id : 0;
        if((previousHistoryValue !== '' && event.target.value !== '' && previousHistoryValue !== event.target.value) || (previousHistoryValue === '' && event.target.value !== '')) {
            const tmpId = previousHistoryId + 1;
            const tmpName = event.target.value;
            const history = {Id:tmpId,Name:tmpName};
            //this.historyList = [...this.historyList,history];
            this.historyList.push(history);
        }
    }

    get wiredGreeting() {
        return this.greeting.toUpperCase();
    }

    get showHistory() {
        return this.historyList.length > 0 ? true : false;
    }
}