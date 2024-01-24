describe('Setting Is Not Equal To filter condition under Time column', () => {
    it('should display only list items where Time Is Not Equal to the specified time in the filter condition', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(5000);
      cy.get('span.filter').eq(6).click();
      cy.wait(2000);
      cy.get('#PickUpTimeoption').select('Is not equal to');
      cy.get('#PickUpTimetxt').type('03:46 PM');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(6).click();
      cy.get('span.field-val') .should('not.contain.text', '03:46 PM');


    
      
    })
})