describe('Turning ON the Checkout Process spec', () => {
    it('should turn ON the checkout process', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Settings').click();
      cy.wait(5000);
      cy.get('#isOnOff').invoke('prop', 'checked').then((isChecked) => {
        // Check the current value of the checkbox
        if (isChecked) {
          // If checkbox is currently 'ON', save it
          cy.get('button.dashboardbtn.ecom-settings').click();
        } else {
          // If checkbox is currently 'OFF', check it
          cy.get('#isOnOff').check();
          cy.get('button.dashboardbtn.ecom-settings').click();
        }
      })
      cy.get('#isOnOff').should('be.checked');


    })
})