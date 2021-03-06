import Head from "next/head";
// Components
import Header from "../components/surfaces/Header/Header";
import Footer from "../components/surfaces/Footer/Footer";
// Types
import type { AppProps } from "next/app";
// Theme
import { ThemeProvider } from "@mui/material";
import theme from "../themes/theme";
// Styles
import "../styles/globals.css";
import { AppContainer } from "../styles/pages/_app.style";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>E-Diaristas</title>
                <meta name="description" content="HomePage of E-Diaristas" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="/fonts/tw-icons/css/treinaweb-icons.css"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </AppContainer>
            </ThemeProvider>
        </>
    );
}
export default MyApp;
