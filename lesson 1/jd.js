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
    savings: true
};

// статьи расходов
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
        if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
        } else {
            i--;
            continue;
        }
    }
}
chooseExpenses();

// бюджет на день
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    console.log(appData.moneyPerDay);
}
detectDayBudget();

// уровень дохода
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!")
    }
}


// необязательные расходы
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = a;
    }
}


// расчет процента от депозита
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?")
        appData.mathIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mathIncome);
    }
}

checkSavings();