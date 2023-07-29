const {getPopular} = require("../modules/movies");

async function movies(parent, args) {
	const result = await getPopular(args.page)
	return result

}

module.exports = {
	movies,
}
