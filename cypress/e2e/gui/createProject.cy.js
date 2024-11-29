import { faker } from '@faker-js/faker'

describe('Create Project', () => {

  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    cy.login()
    cy.api_deleteProjects()
  })

  it('successfully', () => {
    cy.api_createProject(project)
      .then(responde =>{
        expect(responde.status).to.equal(201)
        expect(responde.body.name).to.equal(project.name)
        expect(responde.body.description).to.equal(project.description)
        })
    cy.visit(`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
