describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn').click();
      cy.contains('Menu').click();
      cy.contains('Menu Item Information').click();
      cy.get('a.dashboardbtn.add-menu-item[href="/meal/item/create"]').click();
      cy.get('select#itemtoclone').select('49492');
      cy.get('input#Name').type('DES2-APPLE PIE ROLLS');
      cy.get('input#Description').type('Description1');
      cy.get('input#ReceiptDescription').type('Receipt1');
      cy.get('input#DisplayDescription').type('Shaver');
      cy.get('textarea#WebDescription').type('3 in 1 Shaver');
      cy.get('input.dashboardbtn[type="submit"]').click();
    })
  })