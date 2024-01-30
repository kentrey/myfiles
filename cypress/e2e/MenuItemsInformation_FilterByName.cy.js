describe('Setting Filter conditions under Name column', () => {
    it('should only display the Menu Items that met the Filter conditions being set', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('div.column-heading:contains("Name") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Nameoption').select('Contains');
      cy.get('#Nametxt').type('XXX');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(0).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'XXX');
      cy.get('div.column-heading:contains("Name") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Nameoption').select('Starts with');
      cy.get('#Nametxt').clear();
      cy.get('#Nametxt').type('XXX');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(0).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'XXX');
      cy.get('div.column-heading:contains("Name") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Nameoption').select('Is equal to');
      cy.get('#Nametxt').clear();
      cy.get('#Nametxt').type('XXX-ADD MODIFIER');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(0).click();
      cy.wait(3000);
      cy.get('span.field-val').should('contain.text', 'XXX-ADD MODIFIER');
      cy.get('div.column-heading:contains("Name") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Nameoption').select('Is not equal to');
      cy.get('#Nametxt').clear();
      cy.get('#Nametxt').type('XXX-ADD MODIFIER');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(0).click();
      cy.wait(3000);
      cy.get('span.field-val').should('not.have.text', 'XXX-ADD MODIFIER');



     



    })
})