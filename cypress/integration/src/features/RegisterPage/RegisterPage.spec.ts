const registerPagePath = '/register';

describe('When I visit register page', () => {
  
  beforeEach(() => {
    cy.visit(registerPagePath);
  })
  
  it('It should show me a \'Name\' input with a placeholder', () => {
    cy.get('input[id="name"]').should('have.attr', 'placeholder', 'Nombre');
  });

  it('It should show me a \'Second name\' input with a placeholder', () => {
    cy.get('input[id="secondName"]').should('have.attr', 'placeholder', 'Apellidos');
  });

  it('It should show me a \'Birth date\' input with a maximum date', () => {
    cy.get('input[id="birthDate"]').should('have.attr', 'max', '2005-17-02');
  });

  it('It should show me an username input with a placeholder', () => {
    cy.get('input[id="username"]').should('have.attr', 'placeholder', 'Nombre de usuario');
  });

  it('It should show me an email input with a placeholder', () => {
    cy.get('input[id="email"]').should('have.attr', 'placeholder', 'Correo electrónico');
  });

  it('It should show me a password input with a placeholder', () => {
    cy.get('input[id="password"]').should('have.attr', 'placeholder', 'Contraseña');
  });

  it('It should show me a password confirmation input with a placeholder', () => {
    cy.get('input[id="passwordConfirm"]').should('have.attr', 'placeholder', 'Repite la contraseña');
  });

  it('It should show me a button with text', () => {
    cy.get('button').should('have.text', 'Registrarme');
  });

});
