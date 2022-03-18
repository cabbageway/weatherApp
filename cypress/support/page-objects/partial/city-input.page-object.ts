import { BasePageObject } from "../base.page-object";
import { WeatherResultPageObject } from "./weater-result.page-object";

export class CityInputPageObject extends BasePageObject {
  rootSelector = "div#root > div > div:nth-of-type(1)";

  cityInputSelector = ".py-5 > .has-text-centered.input.mb-2";
  searchBtnSelector = ".py-5 > .button.is-fullwidth.is-primary";

  protected getThis: () => this;

  get cityInput() {
    return cy.get(this.cityInputSelector);
  }

  get rootElement() {
    return cy.get(this.rootSelector);
  }

  get searchBtn() {
    return cy.get(this.searchBtnSelector);
  }


  enterCity = (city: string): CityInputPageObject => {
    this.cityInput.type(city);
    return this;
  };

  clickSearch = (): WeatherResultPageObject => {
    this.searchBtn.click();
    return new WeatherResultPageObject();
  };

  searchCity=()=>{}
}
