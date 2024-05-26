import MainRoot from "../pages/MainRoot.jsx";
import HomePage from "../pages/HomePage/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <></>
            },
            {
                path: '/Services',
                element: <></>
            },
            {
                path: '/work',
                element: <></>
            },
            {
                path: '/pricing',
                element: <></>
            },
            {
                path: '/blog',
                element: <></>
            },
            {
                path: '/contact',
                element: <></>
            }
        ]
    }
]