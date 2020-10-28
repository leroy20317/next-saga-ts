const domain: string = process.env.API_HOST || '';

export default {
	domain: domain,
	getMessageData: `${domain}/get-message`,
};
