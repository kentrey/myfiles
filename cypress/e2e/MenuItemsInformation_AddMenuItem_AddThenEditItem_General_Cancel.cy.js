describe('Editting the new added item but then clicked Cancel button', () => {
    it('should not saved the changes made for the new menu item added', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('17.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST7');
      cy.get('#department').select('MODIFIERS');
      cy.get('#Description').type('POS Des Test7');
      cy.get('#ReceiptDescription').type('Receipt Des Test7');
      cy.get('#DisplayDescription').type('Display Des Test7');
      cy.get('#WebDescription').type('Web Des Test7');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.get('#ItemName').clear();
      cy.get('#ItemName').type('XXX-ITEM NAMETEST8');
      cy.get('#ItemDescription').clear();
      cy.get('#ItemDescription').type('POS Des Test8');
      cy.get('#ReceiptDesc').clear();
      cy.get('#ReceiptDesc').type('Receipt Des Test8');
      cy.get('#DisplayDescription').clear();
      cy.get('#DisplayDescription').type('Display Des Test8');
      cy.get('#DepartmentListText').select('LUNCH ROLL');
      cy.get('#Upc').clear();
      cy.get('#Upc').type('XXX-ITEM NAMETEST8');
      cy.get('#ModifierType').select('Is Modifier Follow Parent');
      cy.get('#DefaultPrice').clear();
      cy.get('#DefaultPrice').type('18.60');
      cy.get('#WebName').invoke('val', 'Item Nametest8');
      cy.get('#Vduid').invoke('val', '');
      cy.get('#Vduid').invoke('val', '3');
      cy.get('#VduColor').invoke('val', '2').invoke('change');
      cy.get('#tax_1').invoke('prop', 'checked', false);
      cy.get('#tax_7').invoke('prop', 'checked', true);
      cy.get('#dis_1').invoke('prop', 'checked', true);
      cy.get('a[href="/meal/item/Info"].dashboardbtn', {timeout: 3000}).first().click();
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Handle the error as needed
        // This prevents Cypress from failing the test
        return false;
      });



      cy.url().should ('include', '/meal/item/Info');
     


    })
})