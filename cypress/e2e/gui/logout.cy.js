describe('Logout', () => {

    it('doLogout', () => {
        cy.login()
        cy.visit('/')
        cy.gui_logout()
    })
  })
  