import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import BottomNavBar from "@/components/common/bottomNavBar";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";
import CommunityPage from "@/pages/community/CommunityPage";
import HomePage from "@/pages/home/HomePage";
import LikePage from "@/pages/home/like/LikePage";
import LocationPage from "@/pages/home/location/LocationPage";
import NotificationPage from "@/pages/home/notification/NotificationPage";
import SearchPage from "@/pages/home/search/SearchPage";
import MapPage from "@/pages/map/MapPage";
import AccountInfoPage from "@/pages/myPage/AccountInfoPage/AccountInfoPage";
import ContactPage from "@/pages/myPage/ContactPage/ContactPage";
import MyPage from "@/pages/myPage/MyPage";
import MyReviewPage from "@/pages/myPage/MyReviewPage/MyReviewPage";
import NotificationSettingPage from "@/pages/myPage/NotificationSettingPage/NotificationSettingPage";
import SettingProfile from "@/pages/myPage/SettingProfile";
import TermsPage from "@/pages/myPage/TermsPage/TermsPage";
import MyTripPage from "@/pages/myTrip/MyTripPage";
import PlanPage from "@/pages/myTrip/plan/PlanPage";
import MyTripListPage from "@/pages/myTripList/MyTripListPage";
import MyTripRecordPage from "@/pages/myTripRecord/MyTripRecordPage";
import MyTripRecordDetailPage from "@/pages/myTripRecordDetail/MyTripRecordDetailPage";
import MyTripRecordList from "@/pages/myTripRecordList/MyTripRecordList";
import PlaceDetailPage from "@/pages/placeDetail/PlaceDetailPage";
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
              element: (
                <ErrorBoundary
                  fallback={
                    <div>
                      에러가 발생했습니다. 다시 시도해 주세요.
                      <BottomNavBar />
                    </div>
                  }
                >
                  <MapPage />
                </ErrorBoundary>
              )
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
            },
            {
              path: PATH.MY_PAGE,
              element: <MyPage />
            },
            {
              path: PATH.SETTING_PROFILE,
              element: <SettingProfile />
            },
            {
              path: PATH.ACCOUNT_INFORMATION,
              element: <AccountInfoPage />
            },
            {
              path: PATH.NOTIFICATION_SETTING,
              element: <NotificationSettingPage />
            },
            {
              path: PATH.MY_REVIEW,
              element: <MyReviewPage />
            },
            {
              path: PATH.TERMS,
              element: <TermsPage />
            },
            {
              path: PATH.CONTACT,
              element: <ContactPage />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
