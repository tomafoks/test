let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "32000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-12-31");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "32000");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){   // статьи расходов
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется?");
            if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50 ) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {   // бюджет на день
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        console.log(appData.moneyPerDay);
    },
    detectLevel: function() {        // уровень дохода
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!")
        }
    },
    chooseOptExpenses: function() {   // необязательные расходы
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?");
            if ( (typeof(a))==='string' && (typeof(a)) != null && 
            a != '' && a.length < 50 ) {
                appData.optionalExpenses[i] = a;
            }
        }
    },
    checkSavings: function() {        // расчет процента от депозита
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?")
            appData.mathIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.mathIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечслите через запятую!)", "");
        while (items != "string" || items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход? (Перечслите через запятую!)", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что нибудь еще?"));
        appData.income.sort();
    }
};