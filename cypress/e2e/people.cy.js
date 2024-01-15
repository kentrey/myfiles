describe('login spec', () => {
    it('passes', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn').click();
      cy.get('a[href="/people/"]').click();
      cy.get('button.addnew.dashboardbtn').click();
      cy.get('select[name="UserType"]').select('Customer');
      cy.get('input[name="Firstname"]').type('Cardo');
      cy.get('input[name="Lastname"]').type('Dalisay');
      cy.get('input[name="MobileNumber"]').type('5678901234');
      cy.get('input[name="Email"]').type('Cardo@dalisay.com');
      cy.get('button.dashboardbtn.savenewpeople').click();
      cy.wait (4000);
    })
  })