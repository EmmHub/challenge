// import '../styles/globals.css'
import { Normalize } from 'styled-normalize'
import Head from 'next/head'
import Header from '../components/Header'
import store from '../Redux/Store/Store'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='theme-color' content='#000000' />
                <meta name='description' content='code challange' />
                <title>Code challange</title>
                <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Indie+Flower&family=Sahitya&family=Zilla+Slab:ital,wght@1,300&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Provider store={store}>
                <Normalize />
                <Header />
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

//makeStore function that returns a new store for every request
const makeStore = () => store
const wrapper = createWrapper(makeStore)

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp)
