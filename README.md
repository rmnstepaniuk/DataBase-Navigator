## Курсовий проект з дисципліни "Інженерія ПЗ"
## Тема проекту: "Онлайн-навігатор бази даних MySQL"

*Онлайн застосунок для перегляду та навігації базами даних*

### Використання застосунку

Для початку необхідно:

 1. Встановити середовище виконання JavaScript [Node.js](https://nodejs.org/uk/)
 2. Клонувати репозиторій за допомогою команди:
```
git clone https://github.com/rmnstepaniuk/database-navigator.git
```
 3. Встановити усі необхідні залежності ```npm install```

Після встановлення проекту можна почати роботу з застосунком:

 4. Для роботи необхідно створити з'єднання з базою даних. Для цього у файлі index.js [(line 80)](https://github.com/rmnstepaniuk/database-navigator/blob/master/index.js#L80) потрібно ввести інформацію про базу даних:  
***хост, користувач, пароль та назва бази***
```javascript
var db = {
    host: '',
    user: '',
    password: '',
    database: ''
}
```
 5. Запустити сервер за допомогою команди ```npm run start```
 6. Перейшовши на вказаний сервер, перед вами з'явиться сторінка

![mainPage_empty](https://user-images.githubusercontent.com/42769810/116797151-42d19500-aaeb-11eb-828c-1df734c637fd.png)

 7. Введіть ваш запит і насолоджуйтесь результатом :)

![mainPage_queryResult](https://user-images.githubusercontent.com/42769810/116797158-51b84780-aaeb-11eb-914e-9442b9766523.png)

### Документація знаходиться [тут](https://github.com/rmnstepaniuk/database-navigator/blob/master/doc/readme.md)

### Курсовий проект виконав:
 - студент ФІОТ групи ІВ-91 Степанюк Роман ІВ-91

### Контактні дані:
 - Електронна пошта: rmnstepaniuk@gmail.com
 - Телеграм: [rmnstepaniuk](http://t.me/rmnstepaniuk)
