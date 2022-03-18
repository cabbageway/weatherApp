export abstract class BasePageObject {
  protected rootSelector: string;

  protected getRootElement = () => cy.get(this.rootSelector);

  protected getThis = () => this;

  public validateExists = (expected: boolean) => {
    expected
      ? this.getRootElement().should("exist")
      : this.getRootElement().should("not.exist");
    return this.getThis();
  };

  public validateVisible = (expected: boolean) => {
    expected
      ? this.getRootElement().should("be.visible")
      : this.getRootElement().should("not.be.visible");
    return this.getThis();
  };
}
