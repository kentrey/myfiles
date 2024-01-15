describe('login spec', () => {
  it('passes', () => {
    cy.visit('https://practicesoftwaretesting.com/#/');
    cy.get('[data-test="nav-sign-in"]').click();
  })
})