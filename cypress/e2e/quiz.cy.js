describe('Tech Quiz E2E Test', () => {
    it('starts the quiz and completes all questions', () => {
      cy.visit('/'); // Adjust URL as necessary for the app's root path
      cy.get('button').contains('Start Quiz').click();
  
      // Loop through all questions
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('be.visible');
        cy.get('.answer-button').first().click(); // Click first answer for each
      }
  
      // Check final score
      cy.get('.score').should('contain', 'Your score');
      cy.get('button').contains('Take New Quiz').should('be.visible');
    });
  });
  