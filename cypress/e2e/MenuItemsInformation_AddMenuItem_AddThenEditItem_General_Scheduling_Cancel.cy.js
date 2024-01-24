describe('Adding a new rule but then decide to Cancel it', () => {
    it('should not add the rule in the Scheduling table', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('20.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST11');
      cy.get('#department').select('MODIFIERS');
      cy.get('#Description').type('POS Des Test10');
      cy.get('#ReceiptDescription').type('Receipt Des Test10');
      cy.get('#DisplayDescription').type('Display Des Test10');
      cy.get('#WebDescription').type('Web Des Test10');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.get('button.dashboardbtn.scheduling-popup').click();
      cy.get('#AvailableDate').type('03/26/2024');
      cy.get('#AvailableTime', { timeout: 30000 }).click();
      cy.get('input.hour-input').type('11');
      cy.get('input.minute-input').type('45');
      cy.get('button.btn.meridiem-btn').then(($element) => {
        if ($element.text() === 'PM') {
            cy.get('button.btn.meridiem-btn').click();
        } else {
      cy.get('button.submit-btn:contains("OK")').click();

    }
  })
      cy.get('#NotAvailableDate').type('04/26/2024');
      cy.get('#NotAvailableTime', { timeout: 30000 }).click();
      cy.get('input.hour-input').type('12');
      cy.get('input.minute-input').type('56');
      cy.get('button.btn.meridiem-btn').then(($element) => {
        if ($element.text() === 'AM') {
            cy.get('button.btn.meridiem-btn').click();
        } else {
      cy.get('button.submit-btn:contains("OK")').click();
      //system just randomly set the time

    }
  })
      
      cy.get('button.dashboardbtn.close-popup').contains('Cancel').each(($el) => {
        cy.wrap($el).click({force: true});

  });

      
  cy.get('textarea#WebDescription').should('be.visible');
     
     


    })
})