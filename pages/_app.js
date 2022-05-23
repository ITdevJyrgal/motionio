import {useSelector} from 'react-redux'
import {IntlProvider} from "react-intl";
import {MESSAGES} from "../intl/messages";
import '../styles/scss/index.scss';
import {wrapper} from "../redux/reducer";
import Head from "next/head";



function MyApp({Component, pageProps}) {
    const locale = useSelector(state => state.main.locale);
    return  (
        <>
            <Head>
                <title>Motion Web LLC</title>
                <link rel="icon" href="/./assets/images/logo-3.svg"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta
                    name="description"
                    content="
                    🔺 Website development and mobile apps
                    🔺 Online-store
                    🔺 CRM-systems
                    🔺 Education platforms"
                />
            </Head>
            <IntlProvider locale={locale} messages={MESSAGES[locale]}>
                <Component {...pageProps}/>
            </IntlProvider>
        </>

    )
}

export default wrapper.withRedux(MyApp);
