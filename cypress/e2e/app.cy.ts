describe('AnselmKuestersApp', () => {
  it('should display copyright', () => {
    cy.visit('/')
    cy.get('.copyright').contains('Copyright © 2024 Anselm Küsters')
  })
})
