import HomeLayout from "../src/HomeLayout";
import Projects from "../src/components/main/Projects";
// import HomeLayout from "../src/components/";
import Hero from "../src/components/main/Hero";
import Services from "../src/components/main/Services/services";
import Team from "../src/components/main/Team";
import Tabs from "../src/components/main/tabs";
import Vacancies from "../src/components/main/Vacancies/Vacancies";
import Form from "../src/components/main/Form"
import Contact from "../src/components/main/contact";
import Head from "next/head";
// import Accardion from "../src/components/main/Vacancies/Accardion";

export default function Home() {

    return (
        <>
            <Head>
                <title>Motion Web LLC</title>
                <link rel="icon" href="/./assets/images/logo-3.svg"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                  <meta  name="description"
                    content="
                    🔺 Website development and mobile apps
                    🔺 Online-store
                    🔺 CRM-systems
                    🔺 Education platforms"
                />
            </Head>
            <HomeLayout>
                <Hero/>
                <Services/>
                <Projects/>
                <Team/>
                <Tabs/>
                {/*<Accardion/>*/}
                <Vacancies/>
                <Form/>
                <Contact/>
            </HomeLayout>
        </>
    )
}
