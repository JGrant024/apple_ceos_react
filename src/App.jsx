import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import ErrorPage from "./pages/ErrorPage";
import CEOs, { loader as ceoLoader } from "./routes/CEOs";
import SingleCeo, { loader as singleCeoLoader } from "./routes/SingleCeo";
import AddCeo, { action, action as addCeoAction } from "./routes/AddCeo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ceos",
        element: <CEOs />,
        loader: ceoLoader,
      },
      {
        path: "/ceos/:slug",
        element: <SingleCeo />,
        loader: singleCeoLoader,
      },
      {
        path: "/ceos/add",
        element: <AddCeo />,
        action: addCeoAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
