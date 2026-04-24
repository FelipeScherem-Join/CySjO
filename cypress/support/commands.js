Cypress.Commands.add('LoginSession', () => {
  cy.session('user-logadov1', () => {
    cy.visit('/login')
    cy.get('[style="cursor: pointer; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; position: absolute; right: 24px; top: 24px;"]').click()
    cy.get('.cc-compliance > .cc-btn').click()
    cy.PlaceHolder('Ex.: exemplo@mail.com', 'ygjjwmjvxmdwdqajlo@nespf.com')
    cy.PlaceHolder('Adicione sua senha', 'SaoJo123!')
    cy.ClicarBotao('Entrar')
    cy.wait(2000)
  }, {
    cacheAcrossSpecs: true,
    
    validate: () => {
      cy.getCookies().then((cookies) => {
        const auth = cookies.find(c =>
          c.name.includes('VtexIdclientAutCookie')
        )

      })
    }
  })
})

Cypress.Commands.add('PreencherCep', (cep) => {
    cy.ClicarBotao()
    cy.PlaceHolder('cep', cep)
    cy.ChecarPagina('saojoaofarmacias.com.br')
})

Cypress.Commands.add('ChecarPagina', (url, titulo) => {
    cy.url().should('include', url)
    if(titulo) {
        cy.contains(titulo).should('be.visible')
    }
})

Cypress.Commands.add('ClicarBotao', (texto) => {
  const regex = new RegExp(`^${texto}$`)
  cy.contains('span', regex).click({ force: true })
})

Cypress.Commands.add('PlaceHolder', (placeholder, texto) => {
    cy.get(`[placeholder="${placeholder}"]`).type(texto)
})






Cypress.Commands.add('BlockTrackers', () => {
  const block = (url) =>
    cy.intercept(url, {
      statusCode: 204,
      body: ''
    })

  // Facebook
  block('**facebook.com/**')
  block('**connect.facebook.net/**')

  // TikTok
  block('**tiktok.com/**')
  block('**analytics.tiktok.com/**')
  block('**log.tiktokv.com/**')

  // Clarity
  block('**clarity.ms/**')
  block('**www.clarity.ms/**')

  // Google Ads / Analytics
  block('**googletagmanager.com/**')
  block('**google-analytics.com/**')
  block('**googleads.g.doubleclick.net/**')

  // Criteo / Ads externos
  block('**criteo.com/**')
  block('**rt-pixel.com/**')
  block('**voxus.com.br/**')

  // VTEX tracking
  // block('**/event-api/**')
  // block('**/collect**')
  // block('**sp.vtex.com/**')

  // outros
  block('**x.cnt.my/**')
  block('**streamshop.com.br/**')
})