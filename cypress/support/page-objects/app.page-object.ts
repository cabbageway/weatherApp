import { BasePageObject } from "./base.page-object";
import { CityInputPageObject } from "./partial/city-input.page-object";


export class AppPageObject extends BasePageObject {
  public readonly cityInput: CityInputPageObject;
  
  protected rootSelector = "#root";

  constructor() {
    super();
    this.cityInput = new CityInputPageObject();
  }
  visit = () => {
    cy.visit("");
    return this;
  };
}
