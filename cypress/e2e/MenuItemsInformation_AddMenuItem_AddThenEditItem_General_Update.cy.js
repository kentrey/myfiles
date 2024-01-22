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
      cy.get('#DefaultPrice').type('15.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST5');
      cy.get('#department').select('DESSERTS');
      cy.get('#Description').type('POS Des Test5');
      cy.get('#ReceiptDescription').type('Receipt Des Test5');
      cy.get('#DisplayDescription').type('Display Des Test5');
      cy.get('#WebDescription').type('Web Des Test5');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.get('#ItemName').clear();
      cy.get('#ItemName').type('XXX-ITEM NAMETEST6');
      cy.get('#ItemDescription').clear();
      cy.get('#ItemDescription').type('POS Des Test6');
      cy.get('#ReceiptDesc').clear();
      cy.get('#ReceiptDesc').type('Receipt Des Test6');
      cy.get('#DisplayDescription').clear();
      cy.get('#DisplayDescription').type('Display Des Test6');
      cy.get('#DepartmentListText').select('LUNCH ROLL');
      cy.get('#Upc').clear();
      cy.get('#Upc').type('XXX-ITEM NAMETEST6');
      cy.get('#ModifierType').select('Is Modifier Follow Parent');
      cy.get('#DefaultPrice').clear();
      cy.get('#DefaultPrice').type('16.60');
    //   cy.get('#WebName').type('Web Item Nametest6');
      cy.get('#Vduid').clear();
      cy.get('#Vduid').type('1');
      cy.get('#VduColor').select('Blue');
      cy.get('#tax_1').uncheck();
      cy.get('#tax_7').check();
      

      
     
      

    




    })
})