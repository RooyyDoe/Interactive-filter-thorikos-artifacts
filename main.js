import data from './assets/data/mainData.js';
// import data from '../assets/data/test-data.js';

let newArray = data.slice();
// console.log(newArray)

showArray(newArray);

console.log('data before filtering: ', data)

document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {

        //loop through all 'SEASON' checkboxes -> if the checkbox is checked the user wants to filter on the value
        //all checked checkbox values are put in an array -> every value in seasonFilters is a value the user wants to filter on
        const seasonFilters = []
        for (const checkBox of document.querySelectorAll('.styleCheckbox:nth-of-type(1) input[type="checkbox"]')) {
            if (checkBox.checked === true) {
                seasonFilters.push(checkBox.value)
            }
        }

        //loop through all 'SHAPE' checkboxes -> if the checkbox is checked the user wants to filter on the value
        //all checked checkbox values are put in an array -> every value in shapeFilters is a value the user wants to filter on
        const shapeFilters = []
        for (const checkBox of document.querySelectorAll('.styleCheckboxTwo:nth-of-type(2) input[type="checkbox"]')) {
            console.log(checkBox)
            if (checkBox.checked === true) {
                shapeFilters.push(checkBox.value)
            }
        }

        //loop through all 'CHRONOLOGY' checkboxes -> if the checkbox is checked the user wants to filter on the value
        //all checked checkbox values are put in an array -> every value in chronologyFilters is a value the user wants to filter on
        const chronologyFilters = []
        for (const checkBox of document.querySelectorAll('.styleCheckboxTwo:nth-of-type(3) input[type="checkbox"]')) {
            if (checkBox.checked === true) {
                chronologyFilters.push(checkBox.value)
            }
        }

        //loop through all 'CONSERVATION' checkboxes -> if the checkbox is checked the user wants to filter on the value
        //all checked checkbox values are put in an array -> every value in conservationFilters is a value the user wants to filter on
        const conservationFilters = []
        for (const checkBox of document.querySelectorAll('.styleCheckbox:nth-of-type(4) input[type="checkbox"]')) {
            if (checkBox.checked === true) {
                conservationFilters.push(checkBox.value)
            }
        }

        //loop through all 'WARE' checkboxes -> if the checkbox is checked the user wants to filter on the value
        //all checked checkbox values are put in an array -> every value in wareFilters is a value the user wants to filter on
        const wareFilters = []
        for (const checkBox of document.querySelectorAll('.styleCheckbox:nth-of-type(5) input[type="checkbox"]')) {
            if (checkBox.checked === true) {
                wareFilters.push(checkBox.value)
            }
        }

        //create a empty 'filteredData' array -> this array will contain all filteredData when all data is filtered
        //the condition variable returns all filter arrays with atleast 1 value (these are the arrays that are relevant for the filtering)
        let filteredData = [],
            condition = [seasonFilters, shapeFilters, chronologyFilters, conservationFilters, wareFilters].filter(arr => arr.length > 0)
        //loop through all data items
        data.forEach(item => {
            //filterConditions checks how many filter conditions the data-item has passed
            //each data item will be checked for each 'active' filter (a.k.a for every filter array with atleast 1 value)
            let filterConditions = 0


            if (seasonFilters.length > 0) { //if the user has activated a 'season' filter 
                if (seasonFilters.includes(String(item.SEASON))) { //check if the data-item is in the seasonFilters array
                    //include === true --> filterConditions++
                    //include === false -->don't do anything
                    filterConditions++
                }
            }

            if (shapeFilters.length > 0) {
                if (shapeFilters.includes(item.SHAPEOBJECT)) { //check if the data-item is in the shapeFilters array
                    //include === true --> filterConditions++
                    //include === false -->don't do anything
                    filterConditions++
                }
            }

            if (chronologyFilters.length > 0) {
                if (chronologyFilters.includes(item.CHRONOLOGY)) { //check if the data-item is in the chronologyFilters array
                    //include === true --> filterConditions++
                    //include === false -->don't do anything
                    filterConditions++
                }
            }

            if (conservationFilters.length > 0) {
                if (conservationFilters.includes(item.CONSERVATION)) { //check if the data-item is in the conservationFilters array
                    //include === true --> filterConditions++
                    //include === false -->don't do anything
                    filterConditions++
                }
            }

            if (wareFilters.length > 0) {
                if (wareFilters.includes(item.WARE)) { //check if the data-item is in the wareFilters array
                    filterConditions++
                }
            }

            //filterConditions = number of filter conditions/checks the data-item has passed
            //condition.length = number of filter conditions/checks the data-item needs to pass in order to be shown
            //if the number of passed checks is the same as the number of checks needed to pass (filterConditions === condition.length) 
            // -> the data-item gets pushed into the filteredData array 
            if (filterConditions === condition.length) {
                filteredData.push(item)
            }
        })
        // console.log([seasonFilters, shapeFilters, chronologyFilters, conservationFilters, wareFilters])
        console.log('data after filtering: ', filteredData)

        handleChange(filteredData)
    });
});



function handleChange(data) {
    newArray = data;
    showArray(newArray);
}

function details(value) {
    newArray.map(shard => {
        if (shard.ID == value) {
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
    document.querySelector('.container').innerHTML = `${data.map(function(shard) {
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