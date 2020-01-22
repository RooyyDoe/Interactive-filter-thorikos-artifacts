import data from '../assets/data/mainData.js';
// import data from '../assets/data/test-data.js';

let newArray = data.slice();
// console.log(newArray)

showArray(newArray);

document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        handleChange()
    });
});

function handleChange() {
    newArray = data.filter(filterBySeason);
    showArray(newArray);
}

function filterBySeason(e) {
    return document.getElementById(e.SEASON).checked;
}

function details(value) {
    newArray.map(shard => {
        if (shard.ID == value) {
            console.log(shard)
            document.querySelector('.detailsWrap').innerHTML = `
            <img src="../assets/images/vase.png">
            <div class="details">
                <h2>ID</h2>
                <p>${shard.ID}</p>
            </div>
            <div class="details">
                <h2>Initials Founder</h2>
                <p>${shard.INITIALS}</p>
            </div>
            <div class="details">
                <h2>Excavation Date</h2>
                <p>${shard.EXCAVATIONDATE}</p>
            </div>
            <div class="details">
                <h2>Context</h2>
                <p>${shard.CONTEXT}</p>
            </div>
            <div class="details">
                <h2>Year</h2>
                <p>${shard.SEASON}</p>
            </div>
            <div class="details">
                <h2>Shape Object</h2>
                <p>${shard.SHAPEOBJECT}</p>
            </div>
            <div class="details">
                <h2>Shape Details</h2>
                <p>${shard.SHAPEDETAILS}</p>
            </div>
            <div class="details">
                <h2>Ware</h2>
                <p>${shard.WARE}</p>
            </div>
            <div class="details">
                <h2>Production Place</h2>
                <p>${shard.PRODUCTIONPLACE}</p>
            </div>
            <div class="details">
                <h2>Conservation</h2>
                <p>${shard.CONSERVATION}</p>
            </div>
            <div class="details">
                <h2>Fragments</h2>
                <p>${shard.FRAGMENTS}</p>
            </div>
            <div class="details">
                <h2>Chronology</h2>
                <p>${shard.CHRONOLOGY}</p>
            </div>
            `
        }
    });

}

function showArray(data) {
    document.querySelector('.container').innerHTML = `${data.map(shard => {
        return `
            <button class="article" href="#" value="${shard.ID}">
                <img src="../assets/images/vase.png"></img>
                <h3>${shard.ID}</h3>
                <p>${shard.CONTEXT}</p>
            </button>
        `
    }).join('')}
    `
    document.querySelectorAll('.container button').forEach(button => {
        button.addEventListener('click', () => {
            details(button.value);
        });
    });
}