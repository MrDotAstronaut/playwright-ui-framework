import { Locator, Page } from '@playwright/test';

export class Test {
    
    readonly page : Page;
    readonly options : Locator;

    constructor(page : Page){
        this.page = page;
        this.options = page.locator(".card-footer-item");
    }

    async clickOption(option : string){
        const count = await this.options.count();
        for(let i = 0; i < count; i++){
            if(await this.options.nth(i).textContent() == option){
                this.options.nth(i).click();
                break;
            }
        }
    }
}