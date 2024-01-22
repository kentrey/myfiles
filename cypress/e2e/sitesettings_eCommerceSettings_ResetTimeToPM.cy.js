describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.get('#ResetTime', { timeout: 30000 }).click();
      cy.get('.hour-input').clear();
      cy.get('.hour-input').type('12');
      cy.get('.minute-input').clear();
      cy.get('.minute-input').type('30');
      cy.get('button.btn.meridiem-btn').then(($element) => {
        if ($element.text() === 'AM') {
            cy.get('button.btn.meridiem-btn').click();
        } else {
      cy.get('button.submit-btn:contains("OK")').click();
    }
})

      cy.get('button.dashboardbtn.ecom-settings').click();
      cy.get('#ResetTime').should('be.visible');  
     
    })
})