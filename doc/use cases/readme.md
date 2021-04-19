# Модель прецедентів

![UC_1](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/rmnstepaniuk/database-navigator/master/src/uml/UC_1)

#### Сценарій №1

***ID:*** UC_1

***НАЗВА:*** Запит SQL

***УЧАСНИКИ:*** Користувач, система

***ПЕРЕДУМОВИ:*** Відсутні

***РЕЗУЛЬТАТ:*** Відображення результатів обробки запиту

***ВИКЛЮЧНІ СИТУАЦІЇ:***
   - EX.1.1 поле запиту порожнє
   - EX.1.2 помилка у синтаксисі SQL
   - EX.1.3 вказаної таблиці не існує
   - EX.1.4 вказаного поля у таблиці не існує

***ОСНОВНИЙ СЦЕНАРІЙ:***

![UC_1](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/rmnstepaniuk/database-navigator/master/src/uml/activity)
