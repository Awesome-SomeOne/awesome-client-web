import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "../constants/path";
import MapPage from "../pages/map/MapPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          id: "root",
          path: PATH.ROOT,
          children: [
            {
              path: PATH.MAP,
              element: <MapPage />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
