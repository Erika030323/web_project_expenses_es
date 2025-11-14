let budgetValue = 0
let totalExpensesValue = 0

const expenseEntries = [
    ["groceries", 33], 
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];

for (const expense of expenseEntries) {
    totalExpensesValue += expense[1];
    
    console.log(expenseEntries.length, "Aca esta el valor")
}
    
function calculateAverageExpense() {
    if ( expenseEntries.length === 0) {
        return 0;
    }
    let averageExpense = totalExpensesValue / expenseEntries.length;
    return averageExpense; //Gasto promedio//
}

function calculateBalance() {
    const balanceValue = budgetValue - totalExpensesValue;  //Presupuesto - Gastos//
    return balanceValue; //Saldo final//
}

let balanceColor = "green"; 

function updateBalanceColor() {
    let balance = calculateBalance (); //se usa la funcion anterior//

    if (balance < 0) {
        balanceColor = "red"; //saldo negativo//
    } else if (balance < budgetValue * 0.25) {
        balanceColor = "orange";      // saldo bajo//   
    } else {
        balanceColor = "green"; //buen saldo//
    }
}

function calculateCategoryExpenses(category) {
    let total = 0;

    for (const expense of expenseEntries) {
        if (expense[0] === category) {
            total += expense[1];            
        }
    }
    return total;
}

function calculateLargestCategory() {
    const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    //Recuerda que este arrys es para iterar (agrupar) c/d categoria, llamar la funcion y mostrar las estadisticas x categoria//
    const categoriesData = []
    
    for (const category of categories) {
        const categoryData = calculateCategoryExpenses(category);
        categoriesData.push([category, categoryData ]);         
    }
      
   let largestCategory = categoriesData [0][0];
   let largestAmount = categoriesData [0][1]; 

   for (const categoryData of categoriesData) {
        if (categoryData [1] > largestAmount) {
            largestAmount = categoryData[1];
            largestCategory = categoryData[0];
        }
   }
   return largestCategory
}

function addExpenseEntry(values) {
    expenseEntries.push(values);
    totalExpensesValue += values[1];
}