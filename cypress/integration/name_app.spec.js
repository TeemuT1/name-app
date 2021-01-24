describe('Name app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('App loads and header is shown', function() {
    cy.contains('Name Application')
  })

  it('Total amount is shown correctly', function() {
    cy.contains('Total amount of all names: 48')
  })

  describe('Name search', function() {

    it('when user types in the filter field, names are filtered in the table', function () {
      cy.get('#filter-input-field')
        .type('Mi')
      cy.get('#name-table')
        .should('contain', 'Mikko')
        .should('contain', 'Minna')
        .should('not.contain', 'Ville')
    })

    it('exact filtering works', function () {
      cy.get('#filter-exact-match-checkbox').click()

      cy.get('#filter-input-field')
        .type('Antt')
      cy.get('#name-table')
        .should('not.contain', 'Antti')
      cy.get('#filter-input-field')
        .type('i')
      cy.get('#name-table')
        .should('contain', 'Antti')
    })
  })

  describe('Name table', function() {

    it('contains names and amounts in descending order by amount', function() {
      cy.get('#name-table')
        .contains('tr', /Tiina/i)
        .should('contain', '9')
        .nextAll().should('have.length', 9)
        .last()
        .should('contain', 'Ville')
        .should('contain', '1')
    })

    it('contains total in the footer table row', function() {
      cy.get('#name-table')
        .find('tfoot tr')
        .should('contain', 'Total')
        .should('contain', 48)
    })

    it('total changes when filtering names', function() {
      cy.get('#filter-input-field')
        .type('Mi')

      cy.get('#name-table')
        .find('tfoot tr')
        .should('contain', 'Total')
        .should('contain', 9)
    })

    it('sort order changes when clicking name table header buttons', function() {
      cy.get('#amount-header-button').click()
      cy.get('#name-table')
        .contains('tr', /Ville/i)
        .should('contain', '1')
        .nextAll().should('have.length', 9)
        .last()
        .should('contain', 'Tiina')
        .should('contain', '9')

      cy.get('#name-header-button').click()
      cy.get('#name-table')
        .contains('tr', /Anna/i)
        .should('contain', '2')
        .nextAll().should('have.length', 9)
        .last()
        .should('contain', 'Ville')
        .should('contain', '1')

      cy.get('#name-header-button').click()
      cy.get('#name-table')
        .contains('tr', /Ville/i)
        .should('contain', '1')
        .nextAll().should('have.length', 9)
        .last()
        .should('contain', 'Anna')
        .should('contain', '2')
    })

  })
})