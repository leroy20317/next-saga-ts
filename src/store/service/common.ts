/** @format */

import api from '../../../utils/api';
import Url from '../../../utils/url';

export const messageData = async function () {
	return api({
		url: Url.getMessageData,
	});
};
