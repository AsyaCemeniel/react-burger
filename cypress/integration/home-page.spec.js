describe("Home page tests", () => {
  beforeEach(function () {
    cy.viewport(1300, 800);
    cy.visit("http://localhost:3000");
    cy.wait(500);
  });

  it("should open and close popup", () => {
    cy.contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента").should("exist");
    cy.get("#popup").contains("Краторная булка N-200i").should("exist");
    cy.get("body").type(`{esc}`);
    cy.get("#popup").should("not.exist");
  });

  it("should drag and drop items", () => {
    cy.contains("Соус Spicy-X").trigger("dragstart");
    cy.get("#container").trigger("drop");
    cy.get("#container").contains("Соус Spicy-X").should("exist");
  });
});
