it('deve logar com sucesso', function(){
    cy.visit('/')
    //# o cypress vai buscar pelo ID
    //assert do titulo
    cy.title().should('eq', 'Training Wheels | QAninja')

})

