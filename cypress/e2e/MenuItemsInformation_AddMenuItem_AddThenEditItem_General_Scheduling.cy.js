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
      cy.get('#DefaultPrice').type('19.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST9');
      cy.get('#department').select('MODIFIERS');
      cy.get('#Description').type('POS Des Test9');
      cy.get('#ReceiptDescription').type('Receipt Des Test9');
      cy.get('#DisplayDescription').type('Display Des Test9');
      cy.get('#WebDescription').type('Web Des Test9');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.get('button.dashboardbtn.scheduling-popup').click();
    

      
      cy.get('h2').contains('Specific Dates', {timeout:3000}).should('be.visible');


    })
})