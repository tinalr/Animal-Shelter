const lostPetTypeSelectEl = document.querySelector('#pet-type');


function clearBoard() {
    const lostPetsContainer = document.querySelector('.all-pets-row');

    lostPetsContainer.textContent = '';
}

function drawAllPets(petsArr) {
    const lostPetsContainer = document.querySelector('.all-pets-row');
    
    const lostPetCards = petsArr.map(pet => {
        return `
            <div class="card col-md-6 mx-auto pet-card p-0" style="width: 18rem;">
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
            `;
        }); 
        
    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}
    
function drawDogPets(petsArr) {
    const lostPetsContainer = document.querySelector('.all-pets-row');

    const lostPetCards = petsArr.map(pet => {
        if (pet.petType === 'dog') {
            return `
                <div class="card col-md-6 mx-auto pet-card p-0" style="width: 18rem;">
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
                `;
        }
    });
    
    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}

function drawCatPets(petsArr) {
    const lostPetsContainer = document.querySelector('.all-pets-row');

    const lostPetCards = petsArr.map(pet => {
        if (pet.petType === 'cat') {
            return `
                <div class="card col-md-6 mx-auto pet-card p-0" style="width: 18rem;">
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
                `;
        }
    });
    
    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}

function drawOtherPets(petsArr) {
    const lostPetsContainer = document.querySelector('.all-pets-row');

    const lostPetCards = petsArr.map(pet => {
        if (pet.petType === 'other') {
            return `
                <div class="card col-md-6 mx-auto pet-card p-0" style="width: 18rem;">
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
                `;
        }
    });
    
    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}



lostPetTypeSelectEl.addEventListener('change', function () { 
    clearBoard();
    
    if (this.value === 'all') { 
        drawAllPets(lostPets);
    }
    else if (this.value === 'dog') {
        drawDogPets(lostPets);
    } else if (this.value === 'cat') {
        drawCatPets(lostPets);
    } else {
        drawOtherPets(lostPets);
    }
})




drawAllPets(lostPets);
