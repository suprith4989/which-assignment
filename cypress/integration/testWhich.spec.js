import {reviewTelevision} from '../support/pageObjects/common.js'

describe('Test which test cases', () => {
  beforeEach(() => {
    cy.visit('https://www.which.co.uk/reviews/televisions')
  })
  it('Filter functionality test', () =>{
    cy.get(reviewTelevision.whichTitle)
      .should('exist')
    cy.get(reviewTelevision.beforeFilter)
      .contains("20-28")
      .click()
    cy.get(reviewTelevision.afterFilter)
      .contains("20-28")
  })
})