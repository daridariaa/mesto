const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddPhoto = document.querySelector('.popup-add-photo');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.edit-form__close-button');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__description');
const nameInput = document.querySelector('.edit-form__name');
const occupationInput = document.querySelector('.edit-form__occupation');
const editProfileForm = document.querySelector('.change-profile-form');
const cardTemplate = document.querySelector('#card').content;
const elements = document.querySelector('.elements');
const addPhotoButton = document.querySelector('.profile__add-button');
const photoNameInput = document.querySelector('.edit-form__photo-title');
const photoLinkInput = document.querySelector('.edit-form__photo-link');
const addPhototForm = document.querySelector('.add-photo-form');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function openPopup() {
    nameInput.value = profileName.textContent;
    occupationInput.value = profileOccupation.textContent;
    popupEditProfile.classList.add('popup_opened');
}

function closePopup() {
    popupEditProfile.classList.remove('popup_opened');
    popupAddPhoto.classList.remove('popup_opened');
    photoLinkInput.value = '';
    photoNameInput.value = '';
}

function submitPopup() {
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = occupationInput.value;
    closePopup();
}

function submitAddPhotoForm(event) {
    event.preventDefault();
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.elements__pic-image').src = photoLinkInput.value;
    cardElement.querySelector('.elements__pic-image').alt = photoNameInput.value;
    cardElement.querySelector('.elements__title').textContent = photoNameInput.value;

    elements.prepend(cardElement);
    closePopup();
}

function handleSubmit(event) {
    event.preventDefault();
    submitPopup();
}

function openAddPhotoForm() {
    popupAddPhoto.classList.add('popup_opened');
}

editProfileButton.addEventListener('click', openPopup);

closePopupButtons.forEach(function(button){
    button.addEventListener('click', closePopup);
});

editProfileForm.addEventListener('submit', handleSubmit);
addPhotoButton.addEventListener('click', openAddPhotoForm);
addPhototForm.addEventListener('submit', submitAddPhotoForm);

initialCards.forEach(function(card) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.elements__pic-image').src = card.link;
    cardElement.querySelector('.elements__pic-image').alt = card.name;
    cardElement.querySelector('.elements__title').textContent = card.name;

    elements.append(cardElement);
});

