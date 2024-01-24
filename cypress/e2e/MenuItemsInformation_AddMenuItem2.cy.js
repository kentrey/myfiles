describe('Adding a Menu Item', () => {
    it('should reflect the added Menu Item in the Menu Items Information table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('11.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST');
      cy.get('#department').select('COOKIES');
      cy.get('#Description').type('POS Des Test');
      cy.get('#ReceiptDescription').type('Receipt Des Test');
      cy.get('#DisplayDescription').type('Display Des Test');
      cy.get('#WebDescription').type('Web Des Test');
      cy.get('input.dashboardbtn[value="Add Menu Item"]').click();
      cy.url().should ('include', '/meal/item/info');




    })
})