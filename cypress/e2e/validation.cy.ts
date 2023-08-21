describe('Testing validations', () => {
  it('validates all values', () => {
    cy.visit('/');

    cy.get('.react-select__control').eq(0).click();
    cy.contains('Youtube').click();
    cy.get('[data-cy="link"]')
      .eq(0)
      .type('https://stackoverflow.com/test')
      .blur();
    cy.get('[data-cy="linkError"]').should('have.length', 1);

    cy.get('.react-select__control').eq(0).click();
    cy.contains('Facebook').click();
    cy.get('[data-cy="link"]')
      .eq(0)
      .clear()
      .type('https://youtube.com/test')
      .blur();
    cy.get('[data-cy="linkError"]').should('have.length', 1);

    cy.get('.react-select__control').eq(0).click();
    cy.contains('Stack Overflow').click();
    cy.get('[data-cy="link"]')
      .eq(0)
      .clear()
      .type('https://facebook.com/test')
      .blur();
    cy.get('[data-cy="linkError"]').should('have.length', 1);

    cy.contains('Profile Details').click();
    cy.get('[data-cy="firstName"]').type('111');
    cy.get('[data-cy="lastName"]').type('222');
    cy.get('[data-cy="email"]').type('invalid.ru').blur();

    cy.get('[data-cy="firstNameError"]').should('have.length', 1);
    cy.get('[data-cy="lastNameError"]').should('have.length', 1);
    cy.get('[data-cy="emailError"]').should('have.length', 1);

    cy.contains('Preview').click();
    cy.get('[data-cy="validationError"]').should('have.length', 1);
  });
});
