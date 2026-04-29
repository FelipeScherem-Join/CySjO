describe('Perfil', () => {
    beforeEach(() => {
        cy.LoginSession()
        cy.visit('/')
    })

    const atalhoPerfil = ['Minha Conta', 'Meus Pedidos', 'Meus Favoritos', 'Sair']
    atalhoPerfil.forEach((atalho) => {
        it(`Acessar atalho: "${atalho}" no perfil `, () => {
            acessarAtalhosPeril(atalho)
        })
    })
    // 
    
    it('Navegar em paginas dentro de "Minha Conta"', () => {
        const paginas = [
            ["Dados pessoais", "/account#/profile", "Dados pessoais"],
            ["Endereços", "/account#/addresses", "Endereços"],
            ["Pedidos", "/account#/orders", "Pedidos"],
            ["Cartões", "/account#/cards", "Cartões"],
            ["Autenticação", "/account#/authentication", "Autenticação"],
            ["Privacidade de dados", "/account#/privacy-settings", "Privacidade de dados"],
            ["Assinaturas", "/account#/subscriptions", "Assinaturas"],
        ]
        
        acessarAtalhosPeril('Minha Conta')
        cy.wait(1000)
        paginas.forEach(([botao, url, titulo]) => {
            navegarMinhaConta(botao)
            cy.ChecarPagina(url, titulo)
        })

        // logout
        cy.get('.vtex-my-account-1-x-menuLink').click()
        cy.ElementoVisivel("Deseja mesmo sair?")
        cy.ElementoVisivel("Cancelar")
        cy.get('.vtex-modal__confirmation > .bg-action-primary').click()
        cy.ChecarPagina('saojoaofarmacias.com.br')
        cy.ElementoVisivel('Entre ou Cadastre-se')
        Cypress.session.clearAllSavedSessions() 
    })


})

function acessarAtalhosPeril(atalho) {
    cy.get('.vtex-login-2-x-profile').click() // Botao perfil
    switch (atalho) {
        case 'Minha Conta':
            cy.get('.vtex-login-2-x-linkProfile').click()
        break
        case 'Meus Pedidos':
            cy.get('.vtex-login-2-x-linkOrders').click()
        break
        case 'Meus Favoritos':
            cy.get('.vtex-login-2-x-linkWishlist').click()
        break
        case 'Sair':
            cy.get('.vtex-login-2-x-logoutButton').click()
            Cypress.session.clearAllSavedSessions() 
        break
  }
}

function navegarMinhaConta(botao) {
    cy.contains('a.vtex-account_menu-link', botao).click()  
}