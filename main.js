const myList = document.querySelector('.container');
import data from './assets/data/test-data.js';

function getData(data) {
    myList.innerHTML = `${data.map(function(shard) {
        return `
            <a class="article" href="#">
                <img src="../assets/images/vase.png"></img>
                <h3>${shard.ID}</h3>
                <p>${shard.CONTEXT}</p>
            </a>
        `
    }).join('')}
    `
}
getData(data)


    // fetch(data)
    //     .then(response => { 
    //         return response.json()
    //     })
    //     .then(data => {
    //         myList.innerHTML = `${data.map(function(shard) {
    //             return `
    //                 <a class="article" href="#">
    //                     <img src="../assets/images/vase.png"></img>
    //                     <h3>${shard.ID}</h3>
    //                     <p>${shard.CONTEXT}</p>
    //                 </a>
    //             `
    //         }).join('')}
    //         `
    //     })
    // .then(data => {

    // })
    // .then(data => {
    //     console.log(data)
    // });