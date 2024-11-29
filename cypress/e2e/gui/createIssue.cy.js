import { faker } from '@faker-js/faker'

describe('Create issue', () => {
  // beforeEach(() => {
  //   cy.login()
  // })

  // it('create a New Issue', () => {
  //   const project = {
  //     name: `project-${faker.datatype.uuid()}`,
  //     description: faker.random.words(5)
  //   }
  //   const description = faker.random.words(5)
  //   const issue = faker.internet.userName()

  //   cy.gui_createProject(project)

  //   cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
  //   cy.contains(project.name).should('be.visible')
  //   cy.contains(project.description).should('be.visible')

  //   cy.visit(`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}/issues`)
  //   cy.get('a[title="New issue"]').click()
  //   cy.get('input[name="issue[title]"')
  //       .type(issue)
  //       .should('have.value', issue)
  //   cy.get('textarea[name="issue[description]"]')
  //       .type(description)
  //       .should('have.value', description)
  //   cy.get('input[value="Submit issue"]')
  //       .click()
  //   cy.get('h2[class="title qa-title"]')
  //       .should('have.text', issue)
  // })

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.login()
    cy.api_createProject(issue.project)
      .then(responde =>{
          expect(responde.status).to.equal(201)
          expect(responde.body.name).to.equal(issue.project.name)
          expect(responde.body.description).to.equal(issue.project.description)
      })
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})
})