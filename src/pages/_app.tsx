/** @format */

import { AppProps } from 'next/app';
import '@/styles/init.scss';
import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
