describe('AnselmKuestersApp', () => {
  it('should display copyright', () => {
    cy.visit('/')
    cy.get('.copyright').contains('Copyright © 2023 Anselm Küsters')
  })
})
