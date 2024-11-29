import { faker } from '@faker-js/faker'
describe('Create project', () => {
    beforeEach(() => {
        cy.api_deleteProjects()
    })   
    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
        cy.api_createProject(project)
            .then(responde =>{
                expect(responde.status).to.equal(201)
                expect(responde.body.name).to.equal(project.name)
                expect(responde.body.description).to.equal(project.description)
            })
    })
})