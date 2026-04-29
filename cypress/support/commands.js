Cypress.Commands.add('PreencherCep', (cep) => {
    cy.PlaceHolder('cep', cep)
    cy.ChecarPagina('saojoaofarmacias.com.br')
})

Cypress.Commands.add('ChecarPagina', (url, titulo) => {
    cy.url().should('include', url)
    if(titulo) {
      cy.get('h1:visible, .vtex-pageHeader__title:visible')
        .contains(titulo)
        .should('be.visible')
    }
})

Cypress.Commands.add('ClicarBotaoSpan', (texto) => {
  const regex = new RegExp(`^${texto}$`)
  cy.contains('span', regex).click({ force: true })
})

Cypress.Commands.add('PlaceHolder', (placeholder, texto) => {
    cy.get(`[placeholder="${placeholder}"]`).type(texto)
})

Cypress.Commands.add('ElementoVisivel', (texto) => {
    cy.contains(texto).should('be.visible')
})