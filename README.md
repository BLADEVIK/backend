# Задание 1

**Создать сервер на Node.js с использование модулей Http и Fs.**

Создать http сервер, который будет запускаться по адресу `127.0.0.1:3003`.

Установить пакет [nodemon](https://www.npmjs.com/package/nodemon), настроить его запуск.

Написать обработчик входящего запроса:

- Ответом на запрос `?hello=<name>` должна быть **строка** `Hello, <name>.`, код ответа 200.
- Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** `Enter a name`, код ответа 400.
- Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200.
- Если никакие параметры не переданы, то ответ **строка** `Hello, World!`, код ответа 200.
- Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500.

## Чеклист для самопроверки

- [ ] В файле package.json в секции scripts есть `dev` который запускает nodemon и `start` который запускает сервер в
  обычном режиме.
- [ ] Чтение файла с пользователями происходит в отдельном модуле, который подключается в главный файл.
- [ ] Для указания пути при чтении файла используется модуль `path`.
- [ ] Порт, на котором происходит запуск сервера, передается через переменную окружения (по умолчанию 3000).
- [ ] После запуска сервера в консоль выводится сообщение о том по какому адресу и на каком порту запущен сервер.
- [ ] В зависимости от того какой ответ отдается - меняется 'Content-Type'.

## Подсказки

### Работа с GET-параметрами

Для более удобного доступа к параметрам GET-запроса можно использовать
класс [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL_API)
и [searchParams](https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams).

```js
const url = new URL(request.url, 'http://127.0.0.1');
console.log(url);
console.log(url.searchParams);
```

### Справочник по Content-Type

В [справочнике](https://www.iana.org/assignments/media-types/media-types.xhtml) в столбце _Name_ указывается что за тип
данных, а столбце _Template_ какой следует указывать Content-Type.

# Задание 2
## Создать сервер на Express.js + MongoDB на основе REST API из предыдущего урока.

## REST API должно быть доступно по адресу 
127.0.0.1:3005.
## REST API должно:
Отдавать список всех пользователей.
Отдавать данные по пользователю на основе id.
Изменять данные пользователя на основе id.
Удалять данные пользователя на основе id.
Отдавать список всех книг.
Отдавать данные по книге на основе id.
Изменять данные книги на основе id.
Удалять данные книги на основе id.

## Также REST API должно:

Возвращать ошибку 404, если сущность не найдена или был запрошен несуществующий роут.
Возвращать ошибку 500, если что-то пошло не так при обработке запроса.
При успешном ответе сервера возвращать JSON-сущности.
Формат данных пользователя:

Имя, строка, не менее 2 символов.
Фамилия, строка, не менее 2 символов.
Username, строка, не менее 5 символов.
Формат данных книги:

Заголовок, строка, не менее 2 символов.
Автор, строка, не менее 2 символов.
Год выпуска, число.
Чек-лист для самопроверки
В файле package.json в секции scripts есть 
dev, который запускает nodemon, и 
start, который запускает сервер в обычном режиме.
Для чтения переменных окружения используется пакет 
dotenv.
В проекте есть .env.example, файл .envдобавлен в .gitignore.
При запуске приложение подключается к серверу mongo.
При разных запросах сервер не падает и в консоли нет ошибок.
Настроен CORS через middleware.
Добавлен middleware логирования, который выводит в консоль адрес, на который пришел запрос (originalUrl).
У проекта понятная структура, код разбит на роуты, модели, контроллеры и middleware.

