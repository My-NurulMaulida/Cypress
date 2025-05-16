describe('Soucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/'); // Ganti dengan URL aplikasi yang diuji
  });

  it('Login Succes', () => {
    cy.get('#user-name').type("standard_user"); // Ganti dengan username yang benar
    cy.get('#password').type("secret_sauce"); // Ganti dengan password yang benar
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html'); // Ganti dengan URL yang sesuai // Pastikan halaman beralih ke inventory
  });

})