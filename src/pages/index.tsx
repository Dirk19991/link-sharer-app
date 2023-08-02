import { createBrowserRouter } from 'react-router-dom';
import MainPage from './main';
import { Header } from 'widgets/header';
import { ProfilePage } from './profile';
import { PreviewPage } from './preview';
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
]);

export default router;
