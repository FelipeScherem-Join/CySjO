describe('US001 - Login', () => {
  
    beforeEach(() => {
        cy.LoginSession()
        cy.PreencherCep()
    })

    it('Entrega Gratis', () => {
        cy.ClicarBotao('Entrega Grátis')
    })
    
    it('Entrega Rápida', () => {
        cy.ClicarBotao('Entrega rátis')
        
    })
    
    it('Retire na Loja', () => {
        cy.ClicarBotao('Retire na loja')
        
    })
    
    it('Pague Fácil', () => {
        cy.ClicarBotao('Pague Fácil')
        
    })
})