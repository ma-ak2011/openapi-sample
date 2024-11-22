import Head from 'next/head'
import { Inter } from 'next/font/google'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useState} from "react";
import {useRecoilValue} from 'recoil';
import {userState} from "@/state/userState";
import {pagesPath} from "@/utils/$path";

const inter = Inter({ subsets: ['latin'] })

type Repo = {
  name: string
  stargazers_count: number
}


type State = {
  loginFailed: boolean;
  isLoggedIn: boolean;
  email: string;
  password: string;
  successRegisterNewPasswordMessages: string[];
  errorMessages: string[];
}

export default async function Login() {
  const [state, setState] = useState<State>({
    loginFailed: false,
    isLoggedIn: false,
    email: "",
    password: "",
    successRegisterNewPasswordMessages: [],
    errorMessages: [],
  });
  const user = useRecoilValue(userState);
  const router = useRouter();

  if (user === null)
    await router.push(pagesPath.login.$url());

  const logout = async () => {
    const token = localStorage.getItem("TOKEN");
    if (token === null) {
      await router.push("/login");
      return;
    }
    const response = await fetch("http://localhost:3000/logout", {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      await router.push(pagesPath.login.$url());
    } else {
      setState({
        ...state,
        errorMessages: ["ログアウトに失敗しました。"]
      });
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <main>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" color="inherit" style={{flexGrow: 1}}>
                ホーム
              </Typography>
              <Button color="inherit" onClick={() => logout()}>
                ログアウト
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <section>
              <Typography variant="h4" gutterBottom>
                ホーム
              </Typography>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
