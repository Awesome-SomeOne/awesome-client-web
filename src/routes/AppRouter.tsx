import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "../constants/path";
import MyTripListPage from "../pages/myTripList/MyTripListPage";
import MapPage from "../pages/map/MapPage";
import MyTripRecordPage from "../pages/myTripRecord/MyTripRecordPage";

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
              path: PATH.MY_TRIP_LIST,
              element: <MyTripListPage />
            },
            {
              path: PATH.MY_TRIP_RECORD(),
              element: <MyTripRecordPage />
            },
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
