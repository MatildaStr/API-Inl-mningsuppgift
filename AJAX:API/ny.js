let container1 = document.getElementById('container1')
let container2 = document.getElementById('container2')
let addButton = document.getElementById('addButton')
let addButton2 = document.getElementById('addButton2')
let addButton3 = document.getElementById('addButton3')


addButton.addEventListener('click', () =>

    fetch('https://sv443.net/jokeapi/v2/joke/Programming?contains=debugging')

    .then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Not successful')
        }

        return response.text();
    })

    .then((data) => {

        let debuggingJoke = JSON.parse(data)

        let joke = debuggingJoke.joke

        container1.innerHTML = `<p>${joke}</p>`;

    })
)


addButton2.addEventListener('click', () =>

    fetch('https://sv443.net/jokeapi/v2/joke/Programming?contains=callback&type=twopart')

    .then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Not successful')
        }

        return response.text();
    })

    .then((data) => {

        let randomJoke = JSON.parse(data)

        let setup = randomJoke.setup
        let delivery = randomJoke.delivery

        container2.innerHTML = `<p>${setup}` + "<br>" + `${delivery}</p>`;

    })
)


addButton3.addEventListener('click', () =>

    fetch('https://sv443.net/jokeapi/v2/joke/Programming?idRange=44')

    .then((response) => {
        console.log(response);
        if (response.ok) {
            console.log('Success!')
        } else {
            throw new Error('Not successful')
        }

        return response.text();
    })

    .then((data) => {

        let WeekendJokeData = JSON.parse(data)
        
        let joke = WeekendJokeData.joke

        container3.innerHTML = `<p>${joke}</p>`;
    })
)