describe('Testing profile adding', () => {
  it('adds profile', () => {
    cy.visit('/');

    // добавляется максимум 5 ссылок
    cy.get('[data-cy="addNewLink"]').click().click().click().click().click();
    cy.get('.react-select__control').should('have.length', 5);

    cy.get('.react-select__control').eq(0).click();
    cy.contains('Youtube').click();
    cy.get('[data-cy="link"]').eq(0).type('https://youtube.com/test');

    cy.get('.react-select__control').eq(1).click();
    cy.contains('Facebook').click();
    cy.get('[data-cy="link"]').eq(1).type('https://facebook.com/test');

    cy.get('.react-select__control').eq(2).click();
    cy.contains('Stack Overflow').click();
    cy.get('[data-cy="link"]').eq(2).type('https://stackoverflow.com/test');

    cy.get('.react-select__control').eq(3).click();
    cy.contains('Codewars').click();
    cy.get('[data-cy="link"]').eq(3).type('https://codewars.com/test');

    cy.get('.react-select__control').eq(4).click();
    cy.contains('Twitter').click();
    cy.get('[data-cy="link"]').eq(4).type('https://twitter.com/test');

    cy.contains('Profile Details').click();
    cy.get('[data-cy="fileUpload"]').attachFile('man.jpg');
    cy.get('[data-cy="firstName"]').type('John');
    cy.get('[data-cy="lastName"]').type('Smith');
    cy.get('[data-cy="email"]').type('test@mail.ru');

    cy.contains('Preview').click();
    cy.contains('John Smith');
    cy.contains('test@mail.ru');
    cy.get('a').should('have.length', 5);
    cy.get('a')
      .eq(0)
      .should('have.prop', 'href')
      .and('equal', 'https://youtube.com/test');
    cy.get('a')
      .eq(1)
      .should('have.prop', 'href')
      .and('equal', 'https://facebook.com/test');
    cy.get('a')
      .eq(2)
      .should('have.prop', 'href')
      .and('equal', 'https://stackoverflow.com/test');
    cy.get('a')
      .eq(3)
      .should('have.prop', 'href')
      .and('equal', 'https://codewars.com/test');
    cy.get('a')
      .eq(4)
      .should('have.prop', 'href')
      .and('equal', 'https://twitter.com/test');

    cy.get('[data-cy="shareLink"]').should('have.length', 1);
  });
});
