/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditureAnalysis = new Array();
  let categorySpent = new Array();
  let output = new Array();
  for(let i = 0; i < transactions.length; i++){
    if(!expenditureAnalysis.includes(transactions[i].category)){
      expenditureAnalysis.push(transactions[i].category);
      categorySpent.push(transactions[i].price);
    }else{
        categorySpent[expenditureAnalysis.indexOf(transactions[i].category)] += transactions[i].price;
    }
  }
  expenditureAnalysis.forEach((element, index) => {
    output.push({"category" : expenditureAnalysis[index] , "totalSpent" : categorySpent[index]});
  });
  return output;
}
module.exports = calculateTotalSpentByCategory;
