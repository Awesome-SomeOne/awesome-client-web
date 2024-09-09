import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import { PATH } from "@/constants/path";
import CommunityPage from "@/pages/community/CommunityPage";
import MapPage from "@/pages/map/MapPage";
import MyTripListPage from "@/pages/myTripList/MyTripListPage";
import MyTripRecordPage from "@/pages/myTripRecord/MyTripRecordPage";
import MyTripRecordDetailPage from "@/pages/myTripRecordDetail/MyTripRecordDetailPage";
import MyTripPage from "@/pages/myTrip/MyTripPage";
import PlanPage from "@/pages/myTrip/plan/PlanPage";
import HomePage from "@/pages/home/HomePage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          id: "root",
          path: PATH.ROOT,
          children: [
            { path: "", element: <HomePage /> },
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
            },
            {
              path: PATH.MY_TRIP_GENERATE,
              element: <MyTripPage />
            },
            {
              path: PATH.MY_TRIP(),
              element: <PlanPage />
            },
            {
              path: PATH.COMMUNITY,
              element: <CommunityPage />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
