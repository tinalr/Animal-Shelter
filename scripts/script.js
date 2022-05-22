
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
                    <a href="#" class="btn btn-primary">Claim <i class="fa fa-paw" aria-hidden="true"></i></a>
                </div>
            </div>
        `;
    });

    lostPetsContainer.insertAdjacentHTML('afterbegin', lostPetCards.join(''));
}

drawAllPets(lostPets);
