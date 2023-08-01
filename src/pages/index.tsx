import { createBrowserRouter } from 'react-router-dom';
import MainPage from './main';
import { Header } from 'widgets/header';
import { ProfilePage } from './profile';
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
]);

export default router;
