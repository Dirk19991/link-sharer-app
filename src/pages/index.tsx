import { createBrowserRouter } from 'react-router-dom';
import MainPage from './main';
import { Header } from 'widgets/header';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
]);

export default router;
