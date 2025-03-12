/*describe('SignUp', () => {
  it('Successfully sign up', () => {
    cy.visit('https://automationexercise.com/', { timeout: 120000 }); 

    //Menu signup
    cy.get ('a[href="/login"]').click();

    cy.get('[data-qa="signup-name"]').type ('adiriyadi');
    cy.get('[data-qa="signup-email"]').type ('adiriyadi@gmail.com');

    //signup button
    cy.get('[data-qa="signup-button"]').click();

   //radio button
   cy.get('#id_gender1',{ timeout: 50000 }).check();


   //complete form
     cy.get('[data-qa="password"]').type('123456');


    //date birth
    cy.get('[data-qa="days"]').select('22');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('1976');

    //address information
    cy.get('[data-qa="first_name"]').type('dodo');
    cy.get('[data-qa="last_name"]').type('riyadi');
    cy.get('[data-qa="company"]').type('Jakarta');

    cy.get('[data-qa="address"]').type('Cipinang');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="zipcode"]').type('13740');
    cy.get('[data-qa="mobile_number"]').type('628197563706');
    cy.get('[data-qa="state"]').type('Singapore');
    cy.get('[data-qa="city"]').type('Singapore');


    cy.get('[data-qa="create-account"]').click();

    cy.get('[data-qa="account-created"]').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();

    cy.get('a[href="/logout"]').click();


  })*/
  
  describe('login authentication', () => {
    it('valid credential', () => {
      cy.visit('https://automationexercise.com/login');
  
  
      cy.get('[data-qa="login-email"]').type('adiriyadi@gmail.com');
      cy.get('[data-qa="login-password"]').type('123456');
  
      cy.get('[data-qa="login-button"]').click();
      
    })

  });
