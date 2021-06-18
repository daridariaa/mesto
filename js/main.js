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
const addPhotoForm = document.querySelector('.add-photo-form');
const popupPhotoExpanded = document.querySelector('.popup-photo-expanded');

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
    popupPhotoExpanded.classList.remove('popup_opened');
    photoLinkInput.value = '';
    photoNameInput.value = '';
}

function submitPopup() {
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = occupationInput.value;
    closePopup();
}

function createCard(name, link, toFront) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.elements__pic-image').src = link;
    cardElement.querySelector('.elements__pic-image').alt = name;
    cardElement.querySelector('.elements__title').textContent = name;

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__like_active');
        }
    );

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function() {
        const card = deleteButton.closest('.elements__element');
        card.remove();
        }
    );

    const image = cardElement.querySelector('.elements__pic-image');
    image.addEventListener('click', function() {
            popupPhotoExpanded.classList.add('popup_opened');
            popupPhotoExpanded.querySelector('.photo-expanded__image').src = image.src;
            popupPhotoExpanded.querySelector('.photo-expanded__image').alt = image.alt;
            popupPhotoExpanded.querySelector('.photo-expanded__title').textContent = image.alt;
        }
    );

    if (toFront) {
        elements.prepend(cardElement);
    } else {
        elements.append(cardElement);
    }
}

function submitAddPhotoForm(event) {
    event.preventDefault();
    createCard(photoNameInput.value, photoLinkInput.value, true);
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
addPhotoForm.addEventListener('submit', submitAddPhotoForm);

initialCards.forEach(function(card) {
    createCard(card.name, card.link, false)
});


