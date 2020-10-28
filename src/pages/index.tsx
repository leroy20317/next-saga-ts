/** @format */

import React, { useEffect } from 'react';
import Layout from '../components/Common/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { wrapper } from '../store/store';
import Header from 'src/components/Common/Header';
import { getMessage } from 'src/store/actions/common';

const homePage = () => {
	const Router = useRouter();
	const dispatch = useDispatch();
	const { message } = useSelector((state: any) => state.common);
	useEffect(() => {
		console.log('Router, dispatch, message', Router, dispatch, message);
	}, []);
	return (
		<Layout>
			<Header />
			<div>首页</div>
		</Layout>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
	try {
		store.dispatch(getMessage());

		store.dispatch(END);
	} catch (error) {
		console.log('error', error);
	}
	await store.sagaTask.toPromise();

	return { props: { query } };
});

export default homePage;
