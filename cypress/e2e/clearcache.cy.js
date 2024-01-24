describe('clear cache', () => {
    it('should clear browsers cache', () => {
        cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
        cy.get('#username').type('jgesim@servingintel.com'); 
        cy.get('#Password').type('Welcome1@'); 
        cy.get('#si-login-btn').click();
        cy.clearCookies();
        cy.clearLocalStorage();
    })
  })