describe('US001 - Login', () => {

  const metodosDeLogin = ['Email', 'Token', 'Google', 'Facebook']

  metodosDeLogin.forEach((metodo) => {
    it.only(`Login por ${metodo}`, () => {
      cenariosDeLogin(metodo)
    })
  })

  it('Login credenciais invalidas', () => {

  })

  it('Logout',() => {
    cy.Login()
    cy.ClicarBotao("Olá")
    cy.ClicarBotao("Sair")
    cy.contains('Entre ou Cadastre-se').should('be.visible')
  })

  afterEach(() => {
    cy.ChecarPagina('saojoaofarmacias.com.br')
  });
})

function cenariosDeLogin(metodo) {
  switch (metodo) {
    case 'Email':
      // fluxo email
      break
    case 'Token':
      // fluxo token
      break
    case 'Google':
      // fluxo google
      break
    case 'Facebook':
      // fluxo facebook
      break
  }
}