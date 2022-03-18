import { BasePageObject } from "../base.page-object";


export class WeatherResultPageObject extends BasePageObject {
    protected rootSelector ='.section';

    titleSelector ='.has-text-centered.title';
    loadingHeaderSelector='.is-size-3.py-2';

    get titleHeader(){
        return cy.get(this.titleSelector);
    }
    get loadingHeaderElement(){
        return cy.get(this.loadingHeaderSelector);
    }

    validateTitleContains(expected:string):WeatherResultPageObject{
        this.titleHeader.should('contain',expected);
        return this;
    }

    validateLoadingVisible=(expected:boolean)=>{
         expected
      ? this.loadingHeaderElement.should("exist")
      : this.loadingHeaderElement.should("not.exist");
      return this;
    }
}
