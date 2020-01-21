import * as jsobject from '../assets/data/test-data.json';
console.log(jsobject)

var newArray = array.slice();
showArray(newArray);

function showArray(array) {
    document.getElementById("result").innerHTML = JSON.stringify(array);
}

function handleChange() {
  newArray = array.filter(filterByJob);
  showArray(newArray);
}

function filterByJob(e) {
  return document.getElementById(e.job).checked;
}