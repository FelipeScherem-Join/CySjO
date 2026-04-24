const cookieName = 'VtexIdclientAutCookie_sjdigital'

describe('Perfil', () => {
    beforeEach(() => {
        cy.LoginSession()
        cy.visit('/')
        cy.wait(2000)

    })

   it.only('Acessa Meus Dados', () => {
        cy.getCookie(cookieName).should('exist')
        cy.get('button[aria-label="Abrir menu"]').click()
        cy.get('[href="/account#/profile"]').click()
        cy.getCookie(cookieName).should('exist')
        // cy.ChecarPagina('/account#/profile', 'Dados pessoais')
        // cy.PreencherDadosLogin()
        // cy.visit('/account#/profile')
        // cy.visit('/')
    })

    it.only('Meus Pedidos', () => {
        cy.getCookie(cookieName).should('exist')
        cy.get('button[aria-label="Abrir menu"]').click()
        cy.get('[href="/account#/profile"]').click()
        cy.getCookie(cookieName).should('exist') 
        // cy.ClicarBotao("Meus Pedidos")
        // cy.ChecarPagina('/account#/orders', 'Pedidos')
    })

    it('Meus Favoritos', () => {
        cy.ClicarBotao("Meus Favoritos")
        cy.ChecarPagina('/wishlist', '')
    })


    it('Checar paginas dentro de "Minha Conta"', () => {    
        const paginas = [
            ["Dados pessoais", "/account#/profile", "Dados pessoais"],
            ["Endereços", "/account#/addresses", "Endereços"],
            ["Pedidos", "/account#/orders", "Pedidos"],
            ["Cartões", "/account#/cards", "Cartões"],
            ["Autenticação", "/account#/authentication", "Autenticação"],
            ["Privacidade de dados", "/account#/my-wallet", "Minha Carteira"],
            ["Assinaturas", "/account#/subscriptions", "Assinaturas"],
        ]

        paginas.forEach(([botao, url, titulo]) => {
            cy.ClicarBotao(botao)
            cy.ChecarPagina(url, titulo)
        })

        // logout
        cy.ClicarBotao("Sair")
        cy.contains("Deseja mesmo sair?").should('be.visible')
        cy.contains("Cancelar").should('be.visible')
        cy.contains("SAIR").should('be.visible')

        cy.ClicarBotao("SAIR")
        cy.ChecarPagina('saojoaofarmacias.com.br')
        cy.contains('Entre ou Cadastre-se').should('be.visible')
    })
})