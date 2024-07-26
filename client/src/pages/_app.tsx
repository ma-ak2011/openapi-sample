import type { AppProps } from 'next/app'
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {red} from "@mui/material/colors";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  palette: {
    error: {
      main: red.A400,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>)
}
