// * Write tests covering what should be displayed on the page when the user first visits.

describe("the user flow when visiting the page", () => {
  beforeEach(() => {
    cy.intercept(
      { method: "GET", url: "http://localhost:3001/api/v1/tricks" },
      {
        statusCode: 200,
        fixture: "tricksTest",
      }
    );
  });

  it("should display a heading, a form, and a display of cards", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="submit"]').should("contain", "Sick Trick Wish List");
    cy.get('[data-cy="form"]').should("have.length", 1);
    cy.get('[data-cy="form"] input').should("have.length", 2);
    cy.get('[data-cy="form"] select').should("have.length", 2);
    cy.get('[data-cy="cards-display"]').should("have.length", 1);
  });
});
