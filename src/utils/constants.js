// Movies info server
const baseUrl = 'https://api.nomoreparties.co/';

const screen = { small: 320, middle: 768, large: 1137, full: 1280 };

//Cards quantity in page
const fullScreenCards = 16;
const largeScreenCards = 12;
const middleScreenCards = 8;
const smallScreenCards = 5;

//Cards quantity add to button click
const fullScreenCardsAdd = 4;
const largeScreenCardsAdd = 3;
const middleScreenCardsAdd = 2;
const smallScreenCardsAdd = 2;

// eslint-disable-next-line no-useless-escape
const regexpURL = /http[s]?:\/\/[www.]?[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=]+\.[a-zA-Z0-9]{2,3}[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=]*[\#]?/
// eslint-disable-next-line no-useless-escape
const regexpName = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;
// eslint-disable-next-line no-useless-escape
const regexpEmail = /^[\-\w.]+@([A-z0-9][\-A-z0-9]+\.)+[A-z]{2,4}$/;

//Errors message
const resultMessage = {
  error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  emptySearch: 'Нужно ввести ключевое слово',
  findNothing: 'Ничего не найдено',
  usedEmail: 'Пользователь с таким email уже существует.',
  failRegister: 'При регистрации пользователя произошла ошибка.', 
  failUserUpdate: 'При обновлении профиля произошла ошибка.',
  wrongEmailPass: 'Вы ввели неправильный логин или пароль.',
  failLogin: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  failToken: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  serverError: 'На сервере произошла ошибка.',
}



module.exports = { regexpURL, regexpName, regexpEmail, resultMessage, baseUrl, 
  screen, fullScreenCards, largeScreenCards, middleScreenCards, smallScreenCards,
  fullScreenCardsAdd, largeScreenCardsAdd, middleScreenCardsAdd, smallScreenCardsAdd };

