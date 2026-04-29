Cypress.Commands.add('LoginSession', () => {
  cy.session('user-logado', () => {
    cy.visit('/login')
    cy.wait(1000)

    cy.get('[style*="right:24px"][style*="top:24px"]').click()
    cy.ClicarBotaoSpan('Aceitar')

    cy.PlaceHolder('Ex.: exemplo@mail.com', 'ygjjwmjvxmdwdqajlo@nespf.com')
    cy.PlaceHolder('Adicione sua senha', 'SJo123!!#')
    cy.ClicarBotaoSpan('Entrar')

  }, {
    cacheAcrossSpecs: true,

    validate: () => {
      cy.getCookies().then((cookies) => {
        const auth = cookies.find(c =>
          c.name.includes('VtexIdclientAutCookie')
        )

        expect(auth, 'cookie de auth').to.exist
      })
    }
  })
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