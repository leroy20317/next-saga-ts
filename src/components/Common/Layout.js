import React, { useEffect } from 'react';
import Head from 'next/head';
import api from 'axios';
import { is_weixin } from '@/utils/util';

const staticHost = process.env.STATIC_HOST;

// type Props = {
//   children?: ReactNode
//   title?: string,
//   description?: string,
//   keywords?: string,
// }

const Layout = ({ children, title = '', description = '', keywords = '' }) => {
	useEffect(() => {
		// if (is_weixin()) {
		// 	// 延迟1s，等待tdk正常
		// 	setTimeout(() => {
		// 		setWeixinShareData();
		// 	}, 1000);
		// }
	});

	const setWeixinShareData = () => {
		api({
			url: '' + encodeURIComponent(window.location.href),
		})
			.then(({ data }) => {
				window.wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: [
						// 需要调用的JS接口列表
						'checkJsApi', // 判断当前客户端版本是否支持指定JS接口
						'onMenuShareTimeline', // 分享给朋友圈
						'onMenuShareAppMessage', // 分享到好友
					],
				});
				window.wx.ready(function () {
					// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
					// 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
					window.wx.onMenuShareTimeline({
						title,
						link: window.location.href,
						imgUrl: '',
						success: function () {
							console.log('分享成功');
						},
						// cancel: function() {
						//     console.log("分享失败");
						// }
					});
					window.wx.onMenuShareAppMessage({
						title,
						desc: description,
						link: window.location.href,
						imgUrl: '',
						// type: "link",
						// dataUrl: "",
						success: function () {
							console.log('分享成功');
						},
						// cancel: function() {
						//     console.log("分享失败");
						// }
					});
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="baidu-site-verification" content="uGgzMZ4ZfV" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta httpEquiv="cleartype" content="on" />
				<meta name="HandheldFriENDly" content="True" />
				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta content="yes" name="apple-touch-fullscreen" />
				<meta
					name="viewport"
					content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
				/>
				<meta
					itemProp="image"
					content="https://leroy-1303866596.cos.ap-beijing.myqcloud.com/icons/icon.png"
				/>
				<link
					href="https://leroy-1303866596.cos.ap-beijing.myqcloud.com/icons/icon.png"
					rel="shortcut icon"
				/>
				<link rel="stylesheet" href={`${staticHost}/css/antd.min.css`} />
				<script src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			{children}
		</>
	);
};

export default Layout;
