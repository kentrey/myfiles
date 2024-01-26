describe('Menu Items Information Show Columns spec', () => {
    it('should display only columns marked as checked', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.wait(2000);
      cy.get('a.dashboardbtn.drop:contains("Need Help?")').click();
      cy.get('a[href="https://university.servingintel.com/user-guides2/servingintel-solutions/si-cloud/si-cloud-control/2-uncategorised/338-how-to-manage-meal-plan-definition-in-site-settings#component"]')
      .scrollIntoView()
      .click(); 
      cy.wait(5000);
      cy.url().should ('include', '/meal/item/info');
        
    //   cy.window().then((win) => {
    //     cy.stub(win, 'open').as('windowOpen');
    //   });
      
    //   // Adding a wait to allow the new tab to open
    //   cy.wait(2000);
      
    //   // Asserting the URL of the newly opened tab
    //   cy.get('@windowOpen').should('be.calledWith', 'https://university.servingintel.com/user-guides2/servingintel-solutions/si-cloud/si-cloud-control/2-uncategorised/338-how-to-manage-meal-plan-definition-in-site-settings#component');
    //   //cy.url().should('contain', 'https://university.servingintel.com/user-guides2/servingintel-solutions/si-cloud/si-cloud-control/2-uncategorised/338-how-to-manage-meal-plan-definition-in-site-settings#component');
     
      

     



    })
})