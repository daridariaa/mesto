let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.edit-form__close-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__description');
let nameInput = document.querySelector('.edit-form__name');
let occupationInput = document.querySelector('.edit-form__occupation');
let editProfileForm = document.querySelector('.edit-form__form');


function openPopup() {
    nameInput.value = profileName.textContent;
    occupationInput.value = profileOccupation.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitPopup() {
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = occupationInput.value;
    closePopup();
}

function handleSubmit(event) {
    event.preventDefault();
    submitPopup();
}

editProfileButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
editProfileForm.addEventListener('submit', handleSubmit);
