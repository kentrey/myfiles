describe('Setting Filter conditions under Description column', () => {
    it('should only display the Menu Items that met the Filter conditions being set', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('div.column-heading:contains("Description") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Descriptionoption').select('Is equal to');
      cy.get('#Descriptiontxt').type('Apple Pie Roll');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(1).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'Apple Pie Roll');
      cy.get('div.column-heading:contains("Description") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Descriptionoption').select('Contains');
      cy.get('#Descriptiontxt').clear();
      cy.get('#Descriptiontxt').type('Roll');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(1).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'Roll');
      cy.get('div.column-heading:contains("Description") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Descriptionoption').select('Starts with');
      cy.get('#Descriptiontxt').clear();
      cy.get('#Descriptiontxt').type('Apple');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(1).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('contain.text', 'Apple');
      cy.get('div.column-heading:contains("Description") .filter').eq(0).click({force: true});
      cy.wait(2000);
      cy.get('#Descriptionoption').select('Is not equal to');
      cy.get('#Descriptiontxt').clear();
      cy.get('#Descriptiontxt').type('Apple Pie Roll');
      cy.wait(2000);
      cy.get('.dashboardbtn.filterbtn').eq(1).click();
      cy.wait(3000);
      cy.get('span.field-val') .should('not.have.text', 'Apple Pie Roll');


     



    })
})