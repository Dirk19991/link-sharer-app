import { RouterProvider } from 'react-router-dom';
import './index.scss';
import router from 'pages';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
