import { Page } from '@playwright/test';
import { POManager } from '../page_objects/po.manager';

export class UIUtils{
    
    readonly pom : POManager;

    constructor(pom : POManager){
        this.pom = pom;
    }

    async preCondition(){
        const lp = await this.pom.loginPage();
        await this.pom.goto("/signin");
        await lp.fillEmail("abcd1234@gmail.com");
        await lp.fillPassword("abcd1234");
        await lp.clickSubmit();
    }

    async postCondition(){
        const hp = await this.pom.homePage();
        await hp.clickLogout();
    }
}