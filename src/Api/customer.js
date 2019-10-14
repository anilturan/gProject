import axios from '../Services/Api'

const marvel_characters_url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=39a7190affca1c907d8c9264c1d5f4ba&hash=614c85ae610ce11dd48bbaa7bf25dbc3`


export const getMarvelCharacters = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(marvel_characters_url)
            .then(response => {
                resolve(response.data.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}