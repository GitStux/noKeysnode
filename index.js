require('dotenv').config()


// go to giphy api and get some gifs using Axios


const axios = require("axios")


const GIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs/search"
const SEARCH_KEYWORD = "kanye"

axios
    .get(`${GIPHY_API_BASE_URL}?api_key=${process.env.GIPHY_API_KEY}&q=${SEARCH_KEYWORD}&limit=12`)
    .then(function (res) {
        const gifs = res.data.data;


        gifs.map(gif => {
            const url = gif.images.downsized.url

            console.log(url)

        })
    })