describe('register spec', () => {
    it('passes', () => {
      cy.visit('https://practicesoftwaretesting.com/#/');
      cy.get('[data-test="nav-sign-in').click();

      cy.get('[data-test="register-link"]').click();
    })
  })