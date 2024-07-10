import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "../constants/path";

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
              element: <div>지도페이지</div>
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
