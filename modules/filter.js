import data from '../assets/data/mainData.js';

let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
// console.log(data)
let newArray = data.slice();
// console.log(newArray)

Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', handleChange);
  });

showArray(newArray);
console.log(newArray)


function showArray(data) {
    document.querySelector('.test').innerHTML = JSON.stringify(data);
}

function handleChange() {
    newArray = data.filter(filterBySeason);
    showArray(newArray);
}

function filterBySeason(e) {
    return document.getElementById(e.SEASON).checked;
}
