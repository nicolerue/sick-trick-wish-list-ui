// * Write a test to check the user flow of adding a new trick to the DOM.

describe("the user flow", () => {
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

  it("should allow the user to post a new card to the display", () => {
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
    cy.get('[data-cy="form-submit"]').click();
    cy.get('[data-cy="cards-display"] > :nth-child(4)').should(
      "contain",
      "wheelie"
    );
  });
  it("should notify the user that not all the fields have been filled out if any of the inputs or selects are chosen", () => {
    cy.get('[data-cy="form-obstacle"]')
      .select("Rail")
      .should("have.value", "Rail");
    cy.get('[data-cy="form-name"]')
      .type("wheelie")
      .should("have.value", "wheelie");
    cy.get('[data-cy="form-tutorial"]')
      .type("https://www.youtube.com/watch?v=VmaVfJj03F0")
      .should("have.value", "https://www.youtube.com/watch?v=VmaVfJj03F0");
    cy.get('[data-cy="form-submit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("please fill in all the fields");
    });
  });
});
