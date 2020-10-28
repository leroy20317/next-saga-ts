/** @format */

import React from 'react';

const NoFound = ({ statusCode }) => {
	return (
		<div className="errorPage">
			<img src="https://cdn7.haitou.cc/pc_campus/static/image/404.png" alt="404" />
			<p>页面出错</p>
			<p>
				错误代码：
				{statusCode}
			</p>
			<style jsx>{`
				.errorPage {
					width: 100%;
					min-height: 100vh;
					background: #f0f0f0;
					padding-top: 200px;
					box-sizing: border-box;
				}
				.errorPage img {
					width: 400px;
					display: block;
					margin: 0 auto;
				}
				.errorPage p:nth-of-type(1) {
					font-size: 18px;
					color: #666666;
					margin-top: 20px;
					text-align: center;
				}
				.errorPage p:nth-of-type(2) {
					font-size: 14px;
					color: #999999;
					margin-top: 10px;
					text-align: center;
				}
			`}</style>
		</div>
	);
};
NoFound.getInitialProps = async ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : null;
	return { statusCode };
};

export default NoFound;
