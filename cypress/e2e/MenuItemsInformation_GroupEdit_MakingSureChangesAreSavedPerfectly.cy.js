describe('Group Edit General tab  Rechecking if changes made are saved per menu item spec', () => {
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
        cy.get(`input.item-select.row-bodycheckbox[value="${49663}"]`).check();
        cy.get(`input.item-select.row-bodycheckbox[value="${49664}"]`).check();
        cy.get('.dashboardbtn.group-edit').click();
        cy.wait(2000);
        cy.get('#ModifierType_IsEnabled').check();
        cy.get('#ModifierType_FieldValue').select('Is Modifier Follow Parent');
        cy.get('#Discounts_IsEnabled').check();
        cy.get('#dis_1').check();
        cy.get('#genTabSubmit', { timeout: 30000 }).eq(0).click({force: true});
        Cypress.on('uncaught:exception', (err, runnable) => {
      // Handle the error as needed
         // This prevents Cypress from failing the test
         return false;
        });
        cy.wait(5000);
        cy.get('.breadcrumbs a[href="/meal/item/info"]').click();
        cy.wait(2000);
        cy.get('input.search-people').type('XXX-TEST UPDATE');
        cy.wait(2000);
        cy.get('button.dashboardbtn.searchitem').type('{enter}');
        cy.wait(3000);
        cy.get(`a.edit-link span.edit-row[data-id="${49663}"]:first`).as('editLink');
        cy.get('@editLink').click();
        cy.wait(2000);
        cy.get('div.field-col select#ModifierType').should('have.value', '1');
        cy.get('input#dis_1').should('be.checked');
        cy.get('div.btnstab-wrap a[href="/meal/item/Info"]').eq(0).click();
        cy.wait(2000);
        cy.get('input.search-people').type('XXX-TEST UPDATE');
        cy.wait(2000);
        cy.get('button.dashboardbtn.searchitem').type('{enter}');
        cy.wait(3000);
        cy.get(`a.edit-link span.edit-row[data-id="${49664}"]:first`).as('editLink');
        cy.get('@editLink').click();
        cy.wait(2000);
        cy.get('div.field-col select#ModifierType').should('have.value', '1');
        cy.get('input#dis_1').should('be.checked');
    
  
       
  
  
  
      })
  })