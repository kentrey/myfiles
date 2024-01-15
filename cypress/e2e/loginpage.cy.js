describe('loginpage spec', () => {
    it('passes', () => {
      cy.visit('https://practicesoftwaretesting.com/#/');
      cy.get('[data-test="nav-sign-in"]').click();

      cy.get('[data-test="email"]').type('test456@gmail.com');
      cy.get('[data-test="password"]').type('testpassword@456');
      cy.get('[data-test="login-submit"]').click();

    })
  })