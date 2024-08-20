import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import { PATH } from "@/constants/path";
import MapPage from "@/pages/map/MapPage";
import MyTripListPage from "@/pages/myTripList/MyTripListPage";
import MyTripRecordPage from "@/pages/myTripRecord/MyTripRecordPage";
import MyTripRecordDetailPage from "@/pages/myTripRecordDetail/MyTripRecordDetailPage";

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
              path: PATH.MY_TRIP_RECORD_DETAIL(),
              element: <MyTripRecordDetailPage />
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
