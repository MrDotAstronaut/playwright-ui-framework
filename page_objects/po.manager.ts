import { Page } from "@playwright/test";

import { Login } from "./login.page";
import { Home } from "./home.page";
import { Test } from "./test.page";

export class POManager{

    readonly page : Page;
    readonly lp : Login;
    readonly hp : Home;
    readonly tp : Test;

    constructor(page : Page){
        this.page = page;
        this.lp = new Login(this.page);
        this.hp = new Home(this.page);
        this.tp = new Test(this.page);
    }

    async goto(path : string){
        await this.page.goto(path);
    }

    async loginPage(){
        return this.lp;
    }

    async homePage(){
        return this.hp;
    }

    async testPage(){
        return this.tp;
    }
}