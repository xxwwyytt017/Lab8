describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Input changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image changes when select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });
  
  it('Sound source changes when select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when volume change, level 3', () => {
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes when volume change, level 2', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when volume change, level 1', () => {
    cy.get('#volume-slider').invoke('val', 30).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when volume change, level 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button is disabled when the textbox input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.be.disabled;
    });
  });

  it('Honk button is disabled when the textbox input is a non-number', () => {
    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.be.disabled;
    });
  });

  it('An error is shown when input number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('-80').then(($el) => {
      expect($el[0].checkValidity()).to.be.false;
    });

    cy.get('#volume-number').clear().type('180').then(($el) => {
      expect($el[0].checkValidity()).to.be.false;
    });
  });

});
