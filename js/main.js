let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.edit-form__close-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__description');
let nameInput = document.querySelector('.edit-form__name');
let occupationInput = document.querySelector('.edit-form__occupation');
let editProfileForm = document.querySelector('.edit-form');
const cardTemplate = document.querySelector('#card').content;
const elements = document.querySelector('.elements');

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

initialCards.forEach(function(card) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.elements__pic-image').src = card.link;
    cardElement.querySelector('.elements__pic-image').alt = card.name;
    cardElement.querySelector('.elements__title').textContent = card.name;

    elements.append(cardElement);
});