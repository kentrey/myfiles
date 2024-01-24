describe('Adding a new scheduling rule', () => {
    it('should successfully add the new scheduling rule', () => {
      cy.visit('https://qa.enterprise.servingintel.com/login?ReturnUrl=%2F');
      cy.get('#username').type('jgesim@servingintel.com'); 
      cy.get('#Password').type('Welcome1@'); 
      cy.get('#si-login-btn', { timeout: 30000 }).click();
      cy.contains('Menu').click();
      cy.get('a[href="/meal/item/info"]').click();
      cy.get('a[href="/meal/item/create"].dashboardbtn.add-menu-item').click();
      cy.get('#itemtoclone').select('49522');
      cy.get('#DefaultPrice').type('20.60');
      cy.get('#Name').type('XXX-ITEM NAMETEST10');
      cy.get('#department').select('MODIFIERS');
      cy.get('#Description').type('POS Des Test10');
      cy.get('#ReceiptDescription').type('Receipt Des Test10');
      cy.get('#DisplayDescription').type('Display Des Test10');
      cy.get('#WebDescription').type('Web Des Test10');
      cy.contains('button.dashboardbtn.addthenedit', 'Add then Edit Item').click();
      cy.get('button.dashboardbtn.scheduling-popup').click();
      cy.get('#AvailableDate').type('03/26/2024');
      cy.get('#AvailableTime', { timeout: 30000 }).click();
      cy.get('.hour-input').clear();
      cy.get('input.hour-input').type('03');
      cy.get('.minute-input').clear();
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
      cy.get('.hour-input').clear();
      cy.get('input.hour-input').type('08');
      cy.get('.minute-input').clear();
      cy.get('input.minute-input').type('56');
      cy.get('button.btn.meridiem-btn').then(($element) => {
        if ($element.text() === 'AM') {
            cy.get('button.btn.meridiem-btn').click();
        } else {
      cy.get('button.submit-btn:contains("OK")').click();
      //system just randomly set the time

    }
  })
      cy.get('input.dashboardbtn[value="Add Rule"]').each(($el) => {
      cy.wrap($el).click({force: true});
  });

      
      cy.get('div.content-heading', {timeout:3000}).should('exist');
     
     


    })
})