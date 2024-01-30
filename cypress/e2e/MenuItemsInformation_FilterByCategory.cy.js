describe('Setting Filter conditions under Category column', () => {
    it('should only display the Menu Items that met the Filter conditions being set', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('div.column-heading:contains("Category") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#DepartmentNameoption').select('Is equal to');
      cy.get('#DepartmentNametxt').type('COOKIES   ');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(2).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'COOKIES');
      cy.get('div.column-heading:contains("Category") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#DepartmentNameoption').select('Contains');
      cy.get('#DepartmentNametxt').clear();
      cy.get('#DepartmentNametxt').type('MEAL');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(2).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'MEAL');
      cy.get('div.column-heading:contains("Category") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#DepartmentNameoption').select('Starts with');
      cy.get('#DepartmentNametxt').clear();
      cy.get('#DepartmentNametxt').type('OP');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(2).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'OP');
      cy.get('div.column-heading:contains("Category") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#DepartmentNameoption').select('Is not equal to');
      cy.get('#DepartmentNametxt').clear();
      cy.get('#DepartmentNametxt').type('COOKIES');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(2).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('not.have.text', 'COOKIES');


     



    })
})