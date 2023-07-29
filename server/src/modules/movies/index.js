const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY } = require('../../config')

const getPopular = async (page) => {
	const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
console.log(result)
	return new Movies(result.data);
}

module.exports = {
	getPopular
}




