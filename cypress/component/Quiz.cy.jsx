describe('Quiz Component', () => {
    it('renders the start button', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('starts the quiz and shows the first question', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('.question').should('be.visible'); // Adjust selector if needed
    });
  
    it('navigates through questions and shows the score at the end', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      
      // Loop through 10 questions for testing
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist');
        cy.get('.answer-button').first().click(); // Clicks the first answer button
      }
  
      cy.get('.score').should('contain', 'Your score'); // Verify score display
    });
  });
  