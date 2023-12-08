import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Login from './routes/Login';
import CreateUser from './routes/CreateUser';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/Loading-screen';
import { auth } from './firebase';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-user',
    element: <CreateUser />,
  },
]);

function App() {
  const [isLoding, setIsLoding] = useState(true);
  const init = async () => {
    //파이어베이스 체크
    await auth.authStateReady();
    setIsLoding(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyle />
      {isLoding ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
