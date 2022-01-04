import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import stylesBase from '../styles/stylesBase';

const App = ({ Component, pageProps }: AppProps) => (
    <div>
        <GlobalStyles />
        <Global styles={stylesBase} />
        <Component {...pageProps} />
    </div>
);

export default App;
