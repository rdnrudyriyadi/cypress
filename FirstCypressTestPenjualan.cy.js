// cypress/integration/login_spec.js

describe('Login Test for Jubelio', () => {
  it('should successfully log in with valid credentials', () => {
    // Visit login page
    cy.visit('https://v2.jubelio.com/auth/login/')

    // Fill the field email/username
    cy.get('input[name="email"]').type('rudy.riyadi@gmail.com')

    // Fill the field password
    cy.get('input[name="password"]').type('4sdfgh!!')

    // Click login button
    cy.get('button[type="submit"]').click()

    // Verified succesfully login
    cy.url().should('include', '/shared/questionaire') 

    // cypress/support/e2e.js or cypress/support/index.js

    Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the ResizeObserver loop error
        if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    // Returning false here prevents Cypress from failing the test
        return false;
  }
    // Returning true would let Cypress fail the test
        return true;

});

/*// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
}); */

    // Purchasing
    cy.visit('https://v2.jubelio.com/sales')

    // Stock Transaction
    cy.visit('https://v2.jubelio.com/sales/transactions/orders')
    cy.get('[data-testid="ChevronRightIcon"]').click()

    // Create New Sales Order
    cy.wait(5000) // Menunggu 5 detik
    cy.contains('button', 'Tambah Baru').click() 
     
     cy.get('input[placeholder="Pilih pelanggan"]').type('Akulaku');
     cy.get('li').contains('Akulaku').click();

     cy.get('input[placeholder="No. ref"]').type('001');

     cy.get('input[placeholder="Pilih lokasi"]').type('Pusat');
     cy.get('li').contains('Pusat').click();

    

  // Add Product 
    cy.contains('button', 'Tambah Baru').click()
    cy.contains('div', 'Celana panjang pria').click()
    
  // Add Penerima
    cy.get('input[placeholder="Masukkan nama penerima"]').type('Akulaku');
    cy.get('input[placeholder="Masukkan no telepon"]').type('08197563706');

    cy.get('button[title="save"').click();


  // Edit Sales Order
  cy.contains('button', 'Semua').click();

  cy.contains('span.font-weight-lightbold', 'SO-000000008')
  .should('be.visible')
  .click();

  cy.get('button[title="edit"').click();

  cy.wait(2000); // menunggu 2 detik
  cy.get('input[placeholder="Pilih pelanggan"]').type('BLIBLI');
  cy.get('li').contains('BLIBLI').click();

  cy.get('input[placeholder="No. ref"]').type('002');

  // Save
  cy.get('button[title="save"').click();

  //Cari Pesanan
  cy.get('input[placeholder="Cari pesanan"]').type('SO-000000008');

  cy.get('button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1qelgoy')
  .click();








   /* // Optionally, set up any global configurations or intercepts
    Cypress.on('uncaught:exception', (err, runnable) => {

    // Ignore specific errors and continue test execution
      if (err.message.includes('u is not a function')) {
        return false
      }
        return true
    })


    // Edit stock
    cy.wait (5000)
    cy.get('a.MuiTypography-root.MuiTypography-inherit.MuiLink-root.MuiLink-underlineAlways.text-link.font-weight-bold.css-x8nsji')
    .contains('ADJ-000000045') 
    .should('be.visible') 
    .click()

    // Click the Edit button
    cy.wait(2000)
    cy.get('button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary')
      .contains('Edit') 
      .click(); 

    //Edit stock
    cy.wait (2000)
    cy.get('span.css-vrer1y').type('100');

    //Click Save button
    cy.get('#content > div > div > form > div > div.title-card.w-100 > div.MuiContainer-root.pt-3.pb-3.d-flex.justify-content-between.title-card-container.css-10ur324 > div.css-vb6e92 > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.ml-1.shadow-none.text-white.btn-outline-primary.false.css-1hw9j7s')
    .should('be.visible')
    .click()

    //Close adjustment stock page
    cy.get('[data-testid="CloseIcon"]').first().click();

    //Search Order
    cy.wait(5000) 
    cy.get('.MuiOutlinedInput-root').first().type('ADJ-000000045')
    cy.get('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1qelgoy')
    .click(); */

  

  })
})
