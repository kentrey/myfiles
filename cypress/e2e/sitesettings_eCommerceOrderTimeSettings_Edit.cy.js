describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.get('div.usermenu-mobile').click({force: true});
      cy.contains('a', 'Site Settings').click({ force: true });
      cy.contains('h3', 'eCommerce Order Time Settings').click();
      cy.wait(3000);
      cy.get('span.edit-row[data-id="7"]').eq(0).click();
      cy.get('#PickUpTime').click({force: true});
      cy.get('.hour-input').clear();
      cy.get('.hour-input').type('08');
      cy.get('.minute-input').clear();
      cy.get('.minute-input').type('46');
      cy.get('button.btn.meridiem-btn').then(($element) => {
        if ($element.text() === 'PM') {
            cy.get('button.btn.meridiem-btn').eq(0).click({force: true});
        } else {
            cy.get('button.btn.meridiem-btn').eq(0).click({force: true});
    }
})
    cy.get('button.btn.btn-primary.mx-1.submit-btn:contains("OK")').click();

      
      
    })
})