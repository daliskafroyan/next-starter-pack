// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { extractCritical } from '@emotion/server';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        const critical = extractCritical(initialProps.html);
        initialProps.html = critical.html;
        initialProps.styles = (
            <>
                {initialProps.styles}
                <style
                    data-emotion-css={critical.ids.join(' ')}
                    dangerouslySetInnerHTML={{ __html: critical.css }}
                />
            </>
        );

        return initialProps;
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <style
                        data-emotion-css={this.props.ids?.join(' ')}
                        dangerouslySetInnerHTML={{ __html: this.props.css }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
