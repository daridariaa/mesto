const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddPhoto = document.querySelector('.popup-add-photo');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.close-button');
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
const addPhotoForm = document.querySelector('.add-photo-form');
const popupPhotoExpanded = document.querySelector('.popup-photo-expanded');
const photoExpandedImage = popupPhotoExpanded.querySelector('.photo-expanded__image');
const photoExpandedTitle = popupPhotoExpanded.querySelector('.photo-expanded__title');

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

function openEditProfilePopup() {
    nameInput.value = profileName.textContent;
    occupationInput.value = profileOccupation.textContent;
    openPopup(popupEditProfile);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function submitEditProfilePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = occupationInput.value;
    closePopup(popupEditProfile);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openAddPhotoForm() {
    photoLinkInput.value = '';
    photoNameInput.value = '';
    openPopup(popupAddPhoto);
}

function createCard(name, link) {
    const cardElement = cardTemplate.cloneNode(true);
    const image = cardElement.querySelector('.elements__pic-image');

    image.src = link;
    image.alt = name;
    cardElement.querySelector('.elements__title').textContent = name;

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function() {
        const card = deleteButton.closest('.elements__element');
        card.remove();
    });

    image.addEventListener('click', function() {
        openPopup(popupPhotoExpanded);
        photoExpandedImage.src = image.src;
        photoExpandedImage.alt = image.alt;
        photoExpandedTitle.textContent = image.alt;
    });
    return cardElement;
}

function addCard(card, toFront){
    if (toFront) {
        elements.prepend(card);
    } else {
        elements.append(card);
    }
}

function submitAddPhotoForm(event) {
    event.preventDefault();
    const card = createCard(photoNameInput.value, photoLinkInput.value);
    addCard(card, true);
    closePopup(popupAddPhoto);
}

function handleClosePopupButton(evt) {
    closePopup(evt.target.closest('.popup'));
}

editProfileButton.addEventListener('click', openEditProfilePopup);

closePopupButtons.forEach(function(button){
    button.addEventListener('click', handleClosePopupButton);
});

editProfileForm.addEventListener('submit', submitEditProfilePopup);
addPhotoButton.addEventListener('click', openAddPhotoForm);
addPhotoForm.addEventListener('submit', submitAddPhotoForm);

initialCards.forEach(function(card) {
    const cardElement = createCard(card.name, card.link);
    addCard(cardElement, false);
});
