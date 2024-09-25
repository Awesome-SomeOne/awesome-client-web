import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import { PATH } from "@/constants/path";
import CommunityPage from "@/pages/community/CommunityPage";
import HomePage from "@/pages/home/HomePage";
import MapPage from "@/pages/map/MapPage";
import MyTripPage from "@/pages/myTrip/MyTripPage";
import PlanPage from "@/pages/myTrip/plan/PlanPage";
import MyTripListPage from "@/pages/myTripList/MyTripListPage";
import MyTripRecordPage from "@/pages/myTripRecord/MyTripRecordPage";
import MyTripRecordDetailPage from "@/pages/myTripRecordDetail/MyTripRecordDetailPage";
import MyTripRecordList from "@/pages/myTripRecordList/MyTripRecordList";
import PlaceDetailPage from "@/pages/placeDetail/PlaceDetailPage";
import SearchPage from "@/pages/home/search/SearchPage";
import LikePage from "@/pages/home/like/LikePage";
import NotificationPage from "@/pages/home/notification/NotificationPage";
import LocationPage from "@/pages/home/location/LocationPage";
import PopularPlacePage from "@/pages/popularPlace/PopularPlacePage";
import RecommendPlacePage from "@/pages/recommendPlace/RecommendPlacePage";

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
            },
            {
              path: PATH.MY_TRIP_RECORD_LIST,
              element: <MyTripRecordList />
            },
            {
              path: PATH.LOCATION,
              element: <LocationPage />
            },
            {
              path: PATH.SEARCH,
              element: <SearchPage />
            },
            {
              path: PATH.LIKE,
              element: <LikePage />
            },
            {
              path: PATH.NOTIFICATION,
              element: <NotificationPage />
            },
            {
              path: PATH.POPULAR_PLACE,
              element: <PopularPlacePage />
            },
            {
              path: PATH.RECOMMEND_PLACE,
              element: <RecommendPlacePage />
            },
            {
              path: PATH.PLACE_DETAIL(),
              element: <PlaceDetailPage />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
