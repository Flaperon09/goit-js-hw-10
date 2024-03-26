// Базовый URL
const BASE_URL = 'https://api.thecatapi.com/v1/images/';
// Название end_point
const END_POINT = 'search';

// Параметры поиска
const searchParams = new URLSearchParams({
    format: 'json',
    has_breeds: 'true',
    order: 'RAND',
    limit: 50,
});

// Параметры заголовка
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_xLh0xd4Q45caNiYkcZ60mZOWOfvOy7CFgjitW2LhWxbyMwFC9iIxdrvdfjIvRwNt",
});

// Опции поиска
const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
};

// Функция запроса на сервер
export const fetchBreeds = () => { 
    return fetch(`${BASE_URL}${END_POINT}?${searchParams}`, requestOptions)
        .then(response => {
            // Проверка статуса ответа
            if (!response.ok) {
                throw new Error(response.statusText)
            };
            return response.json();
        })
};

// Функция запроса информации по выбранной кошке
export const fetchCatByBreed = breedId => {
    // return fetch(`${BASE_URL}${END_POINT}?breed_ids=${breedId}`, requestOptions)
    return fetch(`${BASE_URL}${breedId}`, requestOptions)
        .then(response => {
            // Проверка статуса ответа
            if (!response.ok) {
                throw new Error(response.statusText)
            };
            return response.json();
        })
};