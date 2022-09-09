import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TURL</title>
                <meta name="description" content="TURL - Tiny URL" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="keywords"
                    content="TURL, turl, Tiny URL, Tiny link, YALS, link shortener, short link, minify url, url shortener, yals ml, yals satvikg7, satvikg7, yals-yet-another-link-shortener"
                />
                <meta name="author" content="SatvikG7" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="app">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}
export default MyApp;
