function parseHeaderHandler(req){
	var headers = req.headers
	return {
		ip: headers['x-forwarded-for'] || req.connection.remoteAddress,
		language: headers['accept-language'].split(',')[0],
		os: headers['user-agent'].split('(')[1].split(')')[0]
	};
}

module.exports = parseHeaderHandler;
