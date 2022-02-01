/// <reference types="cypress" />

describe('Initial login screen.', () => {
  it('Must contain the fields: title, email, password and the login button.', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=title]');
    cy.get('[data-cy=email]');
    cy.get('[data-cy=password]');
    cy.get('[data-cy=login]');
  });

  it('It should be possible to login.', () => {
    cy.visit('http://localhost:3000');
    
    cy.get('[data-cy=email]').type('adriano@email.com');
    cy.get('[data-cy=password]').type('hgj152**');

    cy.get('[data-cy=login]').click();
  });
})