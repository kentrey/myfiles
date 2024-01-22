describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('14.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST4');
      cy.get('#department').select('DESSERTS');
      cy.get('#Description').type('POS Des Test4');
      cy.get('#ReceiptDescription').type('Receipt Des Test4');
      cy.get('#DisplayDescription').type('Display Des Test4');
      cy.get('#WebDescription').type('Web Des Test4');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.url().should ('include', '/meal/item/update?id');




    })
})