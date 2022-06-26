import { getSearchBar } from '../support/app.po';

describe('forterest', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a search bar', () => {
    getSearchBar().should('be.visible')
  })

  it('should search', () => {
    getSearchBar().type('b')
    cy.dataTest('cosmetic').should('have.length.greaterThan', 0)
  })
});
