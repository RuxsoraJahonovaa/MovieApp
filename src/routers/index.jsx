import { AboutLayout } from "../layout/AboutLayout";
import { RouteLayout } from "../layout/RouteLayout";
import { AboutPage, HomePage, InfoPage } from "../page";
import { routeNames } from "./const";

export const routes = [
  {
    element: <RouteLayout />,
    path: routeNames.HOME,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AboutLayout />,
        path: routeNames.ABOUT,
        children: [
          {
            index: true, 
            element: <AboutPage/>
        },
          {
            element: <InfoPage/>,
            path: routeNames.ABOUTID
        },
        ],
      },

      {
        element: <h1>Sahifa topilmadi</h1>,
        path: routeNames.NOT_FOUND,
      },
    ],
  },
];
