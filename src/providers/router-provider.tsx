import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import SearchPage from '../pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <App /> },
      { path: 'search', element: <SearchPage /> },
    ],
  },
]);

export default function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
