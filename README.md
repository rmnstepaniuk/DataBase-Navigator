## Курсовий проект з дисципліни "Інженерія ПЗ"
## Тема проекту: "Онлайн-навігатор бази даних MySQL"

*Онлайн застосунок для перегляду та навігації базами даних*

## Використання застосунку

Для початку необхідно:

 1. Встановити середовище виконання JavaScript [Node.js](https://nodejs.org/uk/)
 2. Клонувати репозиторій за допомогою команди:
```
git clone https://github.com/rmnstepaniuk/database-navigator.git
```
 3. Встановити усі необхідні залежності ```npm install```

Після встановлення проекту можна почати роботу з застосунком:

 4. Для роботи необхідно створити з'єднання з базою даних.  
 Для цього у файлі index.js [(line 34)](https://github.com/rmnstepaniuk/database-navigator/blob/master/index.js#L34) потрібно ввести інформацію про базу даних:  
***хост, користувач, пароль та назва бази***
```javascript
var db = {
    host: '',
    user: '',
    password: '',
    database: ''
}
```
 5. Запустити сервер за допомогою команди ```npm start```

![serverOperationalMessage](https://user-images.githubusercontent.com/42769810/116797239-37329e00-aaec-11eb-8496-4737cab52c0d.png)

 6. Перейшовши на вказаний сервер, перед вами з'явиться сторінка

![mainPage_empty](https://user-images.githubusercontent.com/42769810/116797263-90023680-aaec-11eb-8d5a-17c4ee9cabea.png)

 7. Введіть ваш запит і насолоджуйтесь результатом :)

![mainPage_queryResult](https://user-images.githubusercontent.com/42769810/116797283-c8a21000-aaec-11eb-885e-a0401bf8a9b5.png)

### Переглянути jsdoc документацію коду можна за допомогою команди ```npm doc```

## Пояснювальна записка знаходиться [тут](https://github.com/rmnstepaniuk/database-navigator/blob/master/doc/coursework_report.md)

## Курсовий проект виконав:
 - студент ФІОТ групи ІВ-91 Степанюк Роман ІВ-91

## Контактні дані:
 - Електронна пошта: rmnstepaniuk@gmail.com
 - Телеграм: [rmnstepaniuk](http://t.me/rmnstepaniuk)

## Інше
[Методичні вказівки](https://jace-dev.herokuapp.com/design/js-talks#/)

[Звітність](https://drive.google.com/file/d/1A5Pxqb0Esy78t9xhMlkWzzx4chdkXAl2/view?usp=sharing)
