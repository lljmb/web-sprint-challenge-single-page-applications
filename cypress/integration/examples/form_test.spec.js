// Set up tests that will...




// tests go here
describe('Order a Pizza app', () => {
    // here go our consts

    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select').select('medium').should('have.value', 'medium')
    const pepperoni = () => cy.get('input[name="pepperoni"]')
    const beef = () => cy.get('input[name="beef"]')
    const sauce = () => cy.get('input[value="tomato"]')
    const submitButton = () => cy.get('.submit')


    // here goes the code we want running before the tests start
    beforeEach(() => {
        cy.visit('http://localhost:3001/order-form')
    })
    it('sanity test to make sure tests work', () => {
        expect(1+2).to.equal(3);
    });
    //  Get the Name input and type a name in it.
    //  Use an assertion to check if the text inputted contains the name you provided
    //  (Hint: use the .should assertion)
    it('typing into the name input', () => {
        nameInput()
        .should('have.value', '')
        .type('Mr. Potatohead')
        .should('have.value', 'Mr. Potatohead')
    })
    
    //  Set up a test that will check to see if a user can check the toppings
    it('selecting the toppings', () => {
        pepperoni().click()
        beef().click()
    })

    //  Check to see if a user can submit the form data
    it('seeing if user can submit form', () => {
        nameInput()
        .should('have.value', '')
        .type('JMB')
        .should('have.value', 'JMB')
        sizeInput()
        beef().click()
        sauce().click()
        submitButton()
        .should('not.be.disabled')
        .click()
    })
})