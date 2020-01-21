const myList = document.querySelector('.container');
const myRequest = new Request('../assets/data/test-data.json');

fetch(myRequest)
    .then(response => { 
        return response.json()
    })
    .then(data => {
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
    })
    // .then(data => {

    // })
    .then(data => {
        console.log(data)
    });