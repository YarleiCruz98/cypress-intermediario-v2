import { faker } from '@faker-js/faker'
beforeEach(() => {
    cy.api_deleteProjects()
})
describe('Create issue', () => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
    }

    it('successfully', () => {
        cy.api_createIssue(issue)
        .then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(issue.title)
            expect(response.body.description).to.eq(issue.description)
        })
    })


})