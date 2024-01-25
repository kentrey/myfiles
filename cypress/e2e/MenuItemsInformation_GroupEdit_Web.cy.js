describe('Group Edit Web tab Update spec', () => {
    it('should reflect the changes made in the Web tab for each Menu items', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('input.search-people').type('XXX');
      cy.wait(2000);
      cy.get('button.dashboardbtn.searchitem').type('{enter}');
      cy.wait(3000);
      cy.get(`input.item-select.row-bodycheckbox[value="${49659}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49660}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('div.heading li#Web').click();
      cy.get('#WebProductCode_IsEnabled').check();
      cy.get('#WebProductCode_FieldValue').type('WPC1');
      cy.get('#SEOTags_IsEnabled').check();
      cy.get('#SEOTags_FieldValue').type('SEOT1');
      cy.get('#ItemPlacementNumber_IsEnabled').check();
      cy.get('#ItemPlacementNumber_FieldValue').clear();
      cy.get('#ItemPlacementNumber_FieldValue').type('2');
      cy.get('#WebPrice_IsEnabled').check();
      cy.get('#WebPrice_FieldValue').clear();
      cy.get('#WebPrice_FieldValue').type('25');
      cy.get('#EComMenuItemPrice_IsEnabled').check();
      cy.get('#EComMenuItemPrice_FieldValue').clear();
      cy.get('#EComMenuItemPrice_FieldValue').type('30');
      cy.get('#IsAvailable_IsEnabled').check();
      cy.get('#IsAvailable_FieldValue').check();
      cy.get('#IsAvailableForSale_IsEnabled').check();
      cy.get('#IsAvailableForSale_FieldValue').check();
      cy.get('#ItemMessages_IsEnabled').check();
      cy.get('iframe#ItemMessages_FieldValue_ifr').should('be.visible').then(($iframe) => {
         // Switch to the iframe
         cy.wrap($iframe.contents()).as('iframeContent');
      
      // Write your message within the iframe
      cy.get('@iframeContent').find('body').type('Item Message test 1234');
    });

      
      cy.get('#saveWebTab').click(); //will update tomorrow 
      cy.wait(5000);
      cy.get('.tabs').should('be.visible');
      
     

     



    })
})