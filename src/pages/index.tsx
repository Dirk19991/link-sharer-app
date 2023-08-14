import { createBrowserRouter } from 'react-router-dom';
import MainPage from './main';
import { Header } from 'widgets/header';
import { ProfilePage } from './profile';
import { PreviewPage } from './preview';
import { IdPage } from './id';
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
  {
    path: '/profile',
    element: (
      <>
        <Header />
        <ProfilePage />
      </>
    ),
  },
  {
    path: '/preview',
    element: (
      <>
        <Header />
        <PreviewPage />
      </>
    ),
  },
  {
    path: '/profile/:id',
    element: (
      <>
        <Header />
        <IdPage />
      </>
    ),
  },
]);

export default router;
