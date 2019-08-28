let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let newElementOl = document.createElement( "ol" );
document.body.appendChild(newElementOl);

for (i = 0; i < cities.length; i++) {
    let newElementLi = document.createElement( "li" );
    newElementOl.appendChild(newElementLi);
    newElementLi.setAttribute("class", "city" );
    newElementLi.innerHTML = cities[i];
}










