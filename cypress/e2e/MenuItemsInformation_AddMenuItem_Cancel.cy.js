describe('Adding a Menu Item but then decided to cancel it', () => {
    it('should not be reflected in the Menu Item Information table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('13.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST3');
      cy.get('#department').select('COOKIES');
      cy.get('#Description').type('POS Des Test3');
      cy.get('#ReceiptDescription').type('Receipt Des Test3');
      cy.get('#DisplayDescription').type('Display Des Test3');
      cy.get('#WebDescription').type('Web Des Test3');
      cy.contains('a.dashboardbtn', 'Cancel').click();
      cy.url().should ('include', '/meal/item/info');




    })
})