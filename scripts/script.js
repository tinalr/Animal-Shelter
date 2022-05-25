const lostPetTypeSelectEl = document.querySelector('#pet-type');


// HTML string for the cards
function cardElString(pet) { 
    return `
    <div class="card col-md-4 col-lg-3 mx-auto pet-card border-0">
        <div class="bg-light">
            <img src="/assets/lost-pets/${pet.petImg}.jpg" class="card-img-top" alt="${pet.petName} photo">
            <div class="card-body">
                <h5 class="card-title">${pet.petName}</h5>
                <p class="card-text pet-id">ID: ${pet.petID}</p>
                <p class="card-text pet-gender">Gender: ${pet.petGender}</p>
                <p class="card-text pet-breed">Breed: ${pet.petBreed}</p>
                <p class="card-text pet-location">Location Found: ${pet.petLocation}</p>
                <p class="card-text pet-weight">Weight: ${pet.petWeight} lbs</p>
                <a href="#" class="btn text-light" data-bs-toggle="modal" data-bs-target="#claimPetModal">Claim <i class="fa fa-paw" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    `;
}

// Draws the pets on the board, based on their type
function drawPetType(petsArr, petType) {
    const lostPetsContainer = document.querySelector('.all-pets-row');
    
    const lostPetCards = petsArr.map(pet => {
        if (petType === 'all') {
            return cardElString(pet);
        }
        else if (pet.petType === petType) {
            return cardElString(pet);
        }
    });
    
    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}

// clears the html in the card container
function clearBoard() {
    const lostPetsContainer = document.querySelector('.all-pets-row');

    lostPetsContainer.textContent = '';
}

// handler for the select option
lostPetTypeSelectEl.addEventListener('change', function () {
    const petTypeChosen = this.value;
    
    clearBoard();
    drawPetType(lostPets, petTypeChosen);
});


drawPetType(lostPets, 'all');
