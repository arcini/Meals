var button = document.getElementById("clicker");
var body = document.getElementsByTagName("body");
var meals = ["Roast w/ rice and kale","Taco ring w/ rice","Pork potato meatballs w/ mashed potatoes and greens","Spaghetti w/ sauce, meatballs, and broccoli","Burgers w/ tater tots and salad","Chicken patties w/ spaghetti and mixed vegetables","Tacos w/ mexican rice and corn","Grilled cheese w/ various soups","Brinner: eggs, bacon, hashbrowns, etc.","lasagna w/ sauteed spinach","beef stroganoff","Pork roast w/ rice and greens","Stir-fry","Chicken alfredo w/ italian bread and zucchini","Crab cakes w/ applesauce and fries (chips)","Hot dogs w/ mac and cheese and broccoli","Personal pizzas","Wings w/ salad and celery/carrots","Steak w/ mashed potatoes and good green beans","Grilled chicken caesar salads","Baked potato bar","Meat loaf w/ corn and mixed vegtables","Ikea meatballs w/ lingonberry sauce, gravy, mashed potatoes, and green beans","Chicken pie","Homeade italian pasta w/ meat sauce","Yummly meal","Cuisine magazine meal","Stromboli","Chicken piccata w/ pasta and broccoli"];
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var mealNode;
var dayNode;
var meal;
var row;
var ele1;
var ele2;
var currentMeals = [];

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function clicked() {
  document.getElementById("planner").innerHTML = "";
  shuffle(meals);
  for (i=0 ; i<7 ; i++) {
    if (days[i] == "Wednesday" || days[i] == "Sunday") {
      meal = "Leftovers"
    } else {
      meal = meals[i];
    }

    row = document.createElement("tr");
    ele1 = document.createElement('td');
    ele2 = document.createElement('td');

    mealNode = document.createTextNode(meal);
    dayNode = document.createTextNode(days[i]);

    ele1.appendChild(dayNode);
    ele2.appendChild(mealNode);
    row.appendChild(ele1);
    row.appendChild(ele2);

    console.log(row);
    document.getElementById("planner").appendChild(row);
  }
}
