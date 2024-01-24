describe('Setting a Contain filter condition uner Time column', () => {
    it('should display only list that contain specified number in the filter condition', () => {
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
      cy.get('#PickUpTimeoption').select('Contains');
      cy.get('#PickUpTimetxt').type('10');
      cy.wait(2000);
      cy.get('button.dashboardbtn.filterbtn').eq(6).click();
      cy.get('span.field-val') .should('contain.text', '10');


    
      
    })
})