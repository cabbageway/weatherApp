import { AppPageObject } from "../support/page-objects/app.page-object";
import { WeatherResultPageObject } from "../support/page-objects/partial/weater-result.page-object";

describe("Weather App", () => {
  let app: AppPageObject;
  beforeEach(() => {
    app = new AppPageObject();
    app.visit();
    cy.intercept("https://api.openweathermap.org/data/2.5/weather*").as(
      "weatherRequest"
    );
  });

  describe("Sample Suite", () => {
    it("should show app", () => {
      app.validateExists(true).validateVisible(true);
    });
    ["Graz", "Salzburg", "Villach", "Linz", "Eisenstadt"].forEach((city) => {
      it(`should show info for ${city}`, () => {
        const { cityInput } = app;
        cityInput
          .validateExists(true)
          .validateVisible(true)
          .enterCity(city)
          .clickSearch();
        cy.wait("@weatherRequest").then((request) => {
          const { body } = request.response;

          cy.log(JSON.stringify(body));
        });
        const resultPage = new WeatherResultPageObject();
        resultPage.validateLoadingVisible(false).validateTitleContains(city);
      });
    });
  });
});
