'use strict'
let money=+prompt("Ваш бюджет на месяц?"),
    time=prompt("Введите дату в формате YYYY-MM-DD"),
    appData={
        "бюджет": money,
        "Данные времени":time,
        //не понял как сделать 4 пункт
        income:{},
        saving:false
    };
    alert(money/30)
//в javascript 7 типов данных
//инофрмацию в консоль можно ввывести с помощью команды console.log();
// || оператор или , && оператор и 
