import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';

// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_xLh0xd4Q45caNiYkcZ60mZOWOfvOy7CFgjitW2LhWxbyMwFC9iIxdrvdfjIvRwNt";

const listCats = document.querySelector('.breed-select');
const infoOfCats = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');

// Слушатель на изменение поля выбора породы кошки
listCats.addEventListener('change', setOutput);

// Открытие фразы загрузчика при начальной загрузке страницы
loader.classList.remove('js-hidden');

// Функция определения выбранной породы и запроса на сервер
function setOutput(evt) {
    const selectedOptionValue = evt.currentTarget.value;
    // Открытие фразы загрузчика в начале загрузки информации
    loader.classList.remove('js-hidden');
    // Скрытие сообщения об ошибке
    err.classList.add('js-hidden');
    // Очистка предыдущей информации
    infoOfCats.innerHTML = '';
    // Вызов функции запроса информации по выбранной кошке
    fetchCatByBreed(selectedOptionValue)
        .then(result => {
            // Скрытие фразы загрузчика
            loader.classList.add('js-hidden');
            // Добавление разметки с информацией о выбранной кошке
            infoOfCats.innerHTML = createDescription(result);
        })
        // .catch(error => console.log('Oops! Something went wrong! Try reloading the page!', error));
        .catch(error => {
            // Скрытие фразы загрузчика
            loader.classList.add('js-hidden');
            // Открытие сообщения об ошибке
            err.classList.remove('js-hidden');
        }
    );
}

// Вызов функции запроса на сервер для формирования списка кошек
fetchBreeds()
    .then(result => {
        // Скрытие фразы загрузчика
        loader.classList.add('js-hidden');
        // Открытие окна выбора породы кошки
        listCats.classList.remove('js-hidden');
        // Добавления списка кошек в разметку опций выбора
        listCats.innerHTML = createList(result);
    })
    // .catch(error => console.log('Oops! Something went wrong! Try reloading the page!', error));
    .catch(error => {
        // Скрытие фразы загрузчика
        loader.classList.add('js-hidden');
        // Открытие сообщения об ошибке
        err.classList.remove('js-hidden');
    });

// Функция создания разметки выпадающего списка кошек
function createList(array) {
    return array.map(({ id, breeds: [{ name }] }) => `<option class="js-list" value="${id}">${name}</option>`).join('')
};

// Функция создания разметки с информацией о выбранной кошке
function createDescription(arr) {
    const { url, breeds: [{ name, description, temperament }] } = arr;
    return `<ul class="js-data">
        <li><img src="${url}" width="400px"></li>
        <li>
            <h1 class="js-h1">${name}</h1>
            <p class="js-text">${description}</p>
            <p class="js-text"><span class="js-temperament">Temperament: </span>${temperament}</p>
       </li>
    </ul>`
};