// import App from "next/app";
import type { AppProps /* , AppContext */ } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import theme from "common/theme";
import Navigation from "components/Navigation";
import { RecoilRoot, atom } from "recoil";
import GlobalStyle from "../common/GlobalStyle";

export const idStore = atom<number | null>({ key: "id", default: null });

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <div className="root">
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </RecoilRoot>
    );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
