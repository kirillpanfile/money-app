let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener("click", () => {
    time = prompt("Enter the date in the format YYYY-MM-DD", "");
    money = +prompt("Your monthly budget?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your monthly budget?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
     dayValue.value = new Date(Date.parse(time)).getDate();
});
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Enter a required expense item for this month", ""),
                b = prompt ("How much will it cost?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("The budget for 1 day is " + appData.moneyPerDay + "usd.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("This is the minimum level of wealth!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("This is the average level of wealth!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("This is a high level of wealth!");
        } else {
            console.log ("Mistake ...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("What is the amount of savings?"),
                percent = +prompt("At what percentage?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Income from your deposit per month: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Optional expense item?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("What will bring additional income? (List separated by commas)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("You entered incorrect data or did not enter it at all");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Maybe something else?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Ways to add. earnings: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Our program includes data: " + key + " - " + appData[key]);
}