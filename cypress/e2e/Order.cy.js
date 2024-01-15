describe('Order spec', () => {
    it('passes', () => {
      cy.visit('https://practicesoftwaretesting.com/#/');
      cy.get('[data-test="nav-sign-in"]').click();

      cy.get('[data-test="email"]').type('test456@gmail.com');
      cy.get('[data-test="password"]').type('testpassword@456');
      cy.get('[data-test="login-submit"]').click();

      cy.get('[data-test="nav-categories"]').click();

      cy.get('[data-test="nav-hand-tools"]', { timeout: 5000 }).should('be.visible').click();
    //   cy.get('[data-test="product-01HHC1NSGPSE8355DWERC42YBA"]').click();
    cy.get('img[src="assets/img/products/hammer01.jpeg"]').click();
    cy.get('button[data-test="increase-quantity"]').click();

      cy.get('[data-test="add-to-cart"]').click();

      cy.get('[data-test="cart-quantity"]').click();
      cy.get('[data-test="proceed-1"]').click();

     

      cy.get('[data-test="proceed-2"]').click();
      cy.get('[data-test="proceed-3"]').click();

      cy.get('[data-test="payment-method"]').select('2: Cash on Delivery');
      

      cy.get('[data-test="finish"]').click();




    })
  })