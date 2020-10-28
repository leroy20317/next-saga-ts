export const storageTest = storage => {
	if (storage) {
		try {
			storage.setItem('key', 'value');
			storage.removeItem('key');
			return true;
		} catch (e) {
			return false;
		}
	} else {
		return false;
	}
};

export const throttle = (fn, duration) => {
	let isFirst = true;
	let nowTime = +new Date();
	return function () {
		const argvs = arguments;
		let currentTime = +new Date();
		if (isFirst) {
			fn.apply(null, argvs);
			isFirst = false;
		}
		if (currentTime - nowTime >= duration) {
			fn.apply(null, argvs);
			nowTime = currentTime;
		}
	};
};

export const momentFormat = function (timeStr) {
	timeStr = timeStr.indexOf('-') > -1 ? timeStr.replace(/-/g, '/') : timeStr;
	const date = new Date(timeStr);
	let month: any = date.getMonth() + 1;
	let day: any = date.getDate();
	let hour: any = date.getHours();
	let minutes: any = date.getMinutes();
	// let rangeName = hour >= 12 ? "下午" : "上午";
	month = month < 10 ? '0' + month : month;
	hour = hour < 10 ? '0' + hour : hour;
	// hour = hour < 12 ? hour : Math.abs(hour - 12);
	day = day < 10 ? '0' + day : day;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return month + '-' + day + '  ' + hour + ':' + minutes;
};

export const isExpire = function (time) {
	time = typeof time === 'string' ? time.replace(/-/g, '/') : time;
	const now = +new Date();
	const current = new Date(time).getTime();
	if (current < now) {
		return true;
	}
	return false;
};

export const cookieParser = function (cookieStr: any = '') {
	const cookieArr = cookieStr.split('; ');
	const cookieObj = {};
	cookieArr.forEach(element => {
		element = element.split('=');
		cookieObj[element[0]] = element[1];
	});
	return cookieObj;
};

export function getCookie(name) {
	var arr,
		reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
	if ((arr = document.cookie.match(reg))) {
		return arr[2];
	} else {
		return null;
	}
}

export function setCookie(key, value, day?) {
	let Days = day || 30;
	let exp: any = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie =
		key + '=' + encodeURI(value) + ';expires=' + exp.toGMTString() + ';path=/;domain=.liexing.com';
}

// 固定body,防止滚动穿透
export function noScrollPenetration($mask, $modal) {
	const listenerOpts = { passive: false };
	if ($mask) {
		$mask.addEventListener('touchmove', e => e.cancelable && e.preventDefault(), listenerOpts);
	}

	let startY = 0;

	$modal.addEventListener(
		'touchstart',
		e => {
			startY = e.targetTouches[0].clientY;
		},
		listenerOpts
	);

	$modal.addEventListener(
		'touchmove',
		e => {
			const modalHeight = $modal.clientHeight;
			const modalScrollHeight = $modal.scrollHeight;
			const scrollTop = $modal.scrollTop;
			const endY = e.targetTouches[0].clientY;
			const delta = endY - startY;
			//     alert(
			//         `scrolltop:${scrollTop},modalHeight:${modalHeight},modalScrollHeight:${modalScrollHeight},delta:${delta}`
			//     );

			if (
				(scrollTop === 0 && delta > 0) ||
				(scrollTop + modalHeight + 1 >= modalScrollHeight && delta < 0)
			) {
				if (e.cancelable) {
					e.preventDefault();
					e.stopPropagation();
				}
			}
		},
		listenerOpts
	);
}

export const is_weixin = () => {
	let ua: any = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
};
