/// <reference types="Cypress" />

    describe('My Second Test Suite', function()
    {

    it('Automating all types of Elements ',function(){

              cy.visit("https://rahulshettyacademy.com/AutomationPractice/#")
              cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
              cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

              //check multiple Checkboxes by selecting what they have in common
              cy.get('input[type="checkbox"]').check()
              cy.get('input[type="checkbox"]').uncheck()


              //check one item from multiple Checkboxes
              cy.get('input[type="checkbox"]').check(['option2','option3'])


              // Static dropdown  i:e as fixed options
              cy.get('select').select('option3').should('have.value', 'option3')


              //Non -static not fixed eg country of origin: your input determines the options
              cy.get('#autocomplete').type('Nig')
              cy.get('.ui-menu-item div').each(($e1, index, $list)  => {
                        if($e1.text()==="Nigeria")
                        {
                            $e1.click()
                        }
                })
              cy.get('#autocomplete').should('have.value','Nigeria')




           })
    })