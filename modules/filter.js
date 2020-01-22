// import data from '../assets/data/mainData.js';
import data from '../assets/data/test-data.js';

let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
console.log(allCheckboxes)
let newArray = data.slice();
// console.log(newArray)

Array.prototype.forEach.call(allCheckboxes, function (checkbox) {
    checkbox.addEventListener('change', handleChange);
  });

showArray(newArray);
console.log(newArray)


function showArray(data) {
    document.querySelector('.container').innerHTML = `${data.map(function(shard) {
        return `
            <a class="article" href="../view/details.html">
                <img src="../assets/images/vase.png"></img>
                <h3>${shard.ID}</h3>
                <p>${shard.CONTEXT}</p>
            </a>
        `
    }).join('')}
    `
}

function handleChange() {
    newArray = data.filter(filterBySeason);
    showArray(newArray);
}

function filterBySeason(e) {
    return document.getElementById(e.SEASON).checked;
}
