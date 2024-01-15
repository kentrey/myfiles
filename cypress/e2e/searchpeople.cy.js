describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn').click();
      cy.get('a[href="/people/"]').click();
      cy.get('input#search-people.search-people.searchpeps').type('kent');
      cy.get('button.dashboardbtn.searchpeople').click();
    })
})