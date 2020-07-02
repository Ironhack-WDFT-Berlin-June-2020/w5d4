const baseUrl = 'https://ih-crud-api.herokuapp.com/characters';

const getCharacters = () => {
    // get characters from the api
    axios.get(baseUrl).then(response => {
        const data = response.data;
        console.log(response);
        let str = '';

        data.forEach(character => {
            str += `<li>${character.id} ${character.name}</li>`;
        });

        // insert characters in the list in the html
        document.getElementById('characters-list').innerHTML = str;
    });
};

getCharacters();

document.querySelector('form').onsubmit = event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const debt = document.getElementById('debt').checked; // checkbox
    const weapon = document.getElementById('weapon').value;

    console.log(name, occupation, debt, weapon);

    // Todo - post data to api
    axios.post(baseUrl, {
        name,
        occupation,
        debt,
        weapon
    })
        .then(response => {
            getCharacters();
        });
};