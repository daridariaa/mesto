let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.edit-form__close-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__description');
let nameInput = document.querySelector('.edit-form__name');
let occupationInput = document.querySelector('.edit-form__occupation');
let submitButton = document.querySelector('.edit-form__submit-button');


function openPopup() {
    nameInput.value = profileName.innerHTML;
    occupationInput.value = profileOccupation.innerHTML;
    popup.classList.add('popup_opened');

}

editProfileButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);


function submitPopup() {
    profileName.innerHTML = nameInput.value;
    profileOccupation.innerHTML = occupationInput.value;
    closePopup();
}

submitButton.addEventListener('click', submitPopup);