document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('number');
    const cardNameInput = document.getElementById('name');
    const cardExpirationInput = document.getElementById('expiration');
    const cardCVVInput = document.getElementById('cvv');
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const cardContainer = document.getElementById('card-container');

    const cardNumberDisplay = document.getElementById('card-number');
    const cardNameDisplay = document.getElementById('card-holder');
    const cardExpirationDisplay = document.getElementById('card-expiration');
    const cardCVVDisplay = document.getElementById('card-cvv');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple client-side validation for demo purposes
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            loginContainer.style.display = 'none';
            cardContainer.style.display = 'block';
        }
    });

    cardNumberInput.addEventListener('input', function() {
        cardNumberDisplay.textContent = this.value.replace(/(\d{4})/g, '$1 ').trim();
    });

    cardNameInput.addEventListener('input', function() {
        cardNameDisplay.textContent = this.value.toUpperCase();
    });

    cardExpirationInput.addEventListener('input', function() {
        let value = this.value.replace(/[^0-9/]/g, ''); // Allow only numbers and slash
        if (value.length === 2 && !value.includes('/')) {
            value = value + '/';
        }
        cardExpirationDisplay.textContent = value;
    });

    cardCVVInput.addEventListener('input', function() {
        cardCVVDisplay.textContent = this.value;
    });

    cardNumberInput.addEventListener('focus', function() {
        flipCard(false);
        zoomIn(this);
        highlightField(cardNumberDisplay);
    });

    cardNameInput.addEventListener('focus', function() {
        flipCard(false);
        zoomIn(this);
        highlightField(cardNameDisplay);
    });

    cardExpirationInput.addEventListener('focus', function() {
        flipCard(false);
        zoomIn(this);
        highlightField(cardExpirationDisplay);
    });

    cardCVVInput.addEventListener('focus', function() {
        flipCard(true);
        zoomIn(this);
        highlightField(cardCVVDisplay);
    });

    cardNumberInput.addEventListener('blur', function() {
        zoomOut(this);
        removeHighlight(cardNumberDisplay);
    });
    cardNameInput.addEventListener('blur', function() {
        zoomOut(this);
        removeHighlight(cardNameDisplay);
    });
    cardExpirationInput.addEventListener('blur', function() {
        zoomOut(this);
        removeHighlight(cardExpirationDisplay);
    });
    cardCVVInput.addEventListener('blur', function() {
        zoomOut(this);
        removeHighlight(cardCVVDisplay);
    });

    function flipCard(showBack) {
        const card = document.getElementById('card');
        if (showBack) {
            card.querySelector('.card-front').style.transform = 'rotateY(180deg)';
            card.querySelector('.card-back').style.transform = 'rotateY(360deg)';
        } else {
            card.querySelector('.card-front').style.transform = 'rotateY(0)';
            card.querySelector('.card-back').style.transform = 'rotateY(180deg)';
        }
    }

    function zoomIn(input) {
        input.classList.add('zoom-in');
    }

    function zoomOut(input) {
        input.classList.remove('zoom-in');
    }

    function highlightField(field) {
        field.classList.add('highlight');
    }

    function removeHighlight(field) {
        field.classList.remove('highlight');
    }
});
