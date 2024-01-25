describe('Group Edit General tab  Update spec', () => {
  it('should reflect the changes made in the General Information tab for each Menu items', () => {
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
      cy.get(`input.item-select.row-bodycheckbox[value="${49645}"]`).check();
      cy.get(`input.item-select.row-bodycheckbox[value="${49646}"]`).check();
      cy.get('.dashboardbtn.group-edit').click();
      cy.wait(2000);
      cy.get('#DescriptionField_IsEnabled').check();
      cy.get('#DescriptionField_FieldValue').type('Item Description Group Edit');
      cy.get('#ReceiptField_IsEnabled').check();
      cy.get('#ReceiptField_FieldValue').type('Receipt Description Group Edit');
      cy.get('#DisplayDescription_IsEnabled').check();
      cy.get('#DisplayDescription_FieldValue').type('Display Description Group Edit');
      cy.get('#WebNameField_IsEnabled').check();
      cy.get('#WebNameField_FieldValue').type('Web Item Name Group Edit');
      cy.get('#WebDescription_IsEnabled').check();
      cy.get('#WebDescription_FieldValue').type('Web Description Group Edit');
      cy.get('#ItemCount_IsEnabled').check();
      cy.get('#ItemCount_FieldValue').clear();
      cy.get('#ItemCount_FieldValue').type('2');
      cy.get('#DepartmentField_IsEnabled').check();
      cy.get('#DepartmentField_FieldValue').select('LUNCH ROLL');
      cy.get('#UPC_IsEnabled').check();
      cy.get('#UPC_FieldValue').type('UPC Group Edit');
      cy.get('#TaxFlags_IsEnabled').check();
      cy.get('#tax_1').check();
      cy.get('#tax_3').check();
      cy.get('#ModifierType_IsEnabled').check();
      cy.get('#ModifierType_FieldValue').select('Is Modifier Follow Parent');
      cy.get('#Discounts_IsEnabled').check();
      cy.get('#dis_1').check();
      cy.get('#dis_2').check();
      cy.get('#genTabSubmit', { timeout: 30000 }).eq(0).click({force: true});
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Handle the error as needed
        // This prevents Cypress from failing the test
        return false;
      });
      cy.wait(5000);
      cy.get('#main-tab').should('be.visible');
      
     

     



    })
})