describe('Registration', () => {
  it('should allow people to sign up', () => {
    cy.visit('/');

    cy.get('#email').type('test@email.com');

    const password = 'test';

    cy.get('#password').type(password);
    cy.get('#repeat-password').type(password);

    cy.get("input[type='submit']").click();

    cy.get('#welcome-screen')
      .contains('Rejestracja zakończona!')
      .should('be.visible');
  });
});
