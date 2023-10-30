// * Write a test that checks that when data is put into the form, the value is reflected in that form input.

describe("the value reflected in the form input", () => {
  beforeEach(() => {
    cy.intercept(
      { method: "GET", url: "http://localhost:3001/api/v1/tricks" },
      {
        statusCode: 201,
        fixture: "tricksTest",
      }
    ).as("getTricks");
    cy.visit("http://localhost:3000/");
    cy.wait("@getTricks");
  });

  it("should reflect the data the user has put into the form", () => {
    cy.get('[data-cy="form-stance"]')
      .select("Regular")
      .should("have.value", "Regular");
    cy.get('[data-cy="form-obstacle"]')
      .select("Rail")
      .should("have.value", "Rail");
    cy.get('[data-cy="form-name"]')
      .type("wheelie")
      .should("have.value", "wheelie");
    cy.get('[data-cy="form-tutorial"]')
      .type("https://www.youtube.com/watch?v=VmaVfJj03F0")
      .should("have.value", "https://www.youtube.com/watch?v=VmaVfJj03F0");
  });
});
