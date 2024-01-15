describe('firstname spec', () => {
    it('passes', () => {
      cy.visit('https://practicesoftwaretesting.com/#/');
      cy.get('[data-test="nav-sign-in').click();

      cy.get('[data-test="register-link"]').click();
      cy.get('[data-test="first-name"]').focus().type('John');
      cy.get('[data-test="last-name"]').type('Last');
      cy.get('[data-test="dob"]').type('1991-01-01'); // Replace with the desired date
      cy.get('[data-test="address"]').type('123 Main St, City, Country'); // Replace with the desired address
      cy.get('[data-test="postcode"]').type('12345');
      cy.get('[data-test="city"]').type('Houston');
      cy.get('[data-test="state"]').type('Texas');
      cy.get('[data-test="country"]').select('United States of America (the)');
      cy.get('[data-test="phone"]').type('639123456789');
      cy.get('[data-test="email"]').type('test456@gmail.com');
      cy.get('[data-test="password"]').type('testpassword@456');
      cy.get('[data-test="register-submit"]').click();




    })
  })