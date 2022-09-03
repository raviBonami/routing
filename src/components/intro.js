
// Intro to routing - 
// Fully featured client and server side routing library for React
// Helps to create and navigate between different URLs that make up
// our web application

// Provides unique URLs for different components in the app
// and makes the UI easily shareable with other users

// New router version is V6, old version is V5
// Step 1 - To connect the url in the browser with our react application
// import {BrowserRouter, Routes, Route} from 'react-router-dom' in index.js
// and wrap the App component with <BrowserRouter> tag

// All routes that are present should be wrapped around
// with Routes tag
// Only under Routes can you define Route

// BrowserRouter  - provides information about the current 
// location to its descendants and will perform navigation 
// between pages

// Routes - A set of routes is defined as Routed element, 
// Each route is defined in Route element within it

// Whenever the location changes, Routes finds the Route 
// element that best matches the path prop to the current 
// location and renders the element defined in the element prop
// So, the Route element is a bit like an if statement -
//  if its path matches the current path, it renders its element.

// Route replaces Switch in previous version, the difference
// being that ordering of Route element within it don't impact the 
// matching like it used to do with Switch

// Navigation - 
// Link - A link element will navigate to the route specified in
// the "to" prop when clicked
// "to" is relative to the route that rendered it if the path 
// doesn't start with "/"
// If the path begins with /, it is relative to the root of the app
// Link is a (anchor) element under the hod but doesn't cause server
// side navigation, the navigation happens all in browser

// Links do not reload the page whereas a-href reloads it

// NavLink - NavLink knows whether or not it is active

// <Link/> is the element you could use to navigate through routes.


// <Route/>, its most basic responsibility is to render some 
// UI when a location matches the route’s path.

// Nested Routes - 
// If a route is present inside an outer route, then it is
// works with respect to that, it means that if a route
// is /learn and it has inside it another route "JS", then
// its path would be /learn/JS
// Also, for nested paths, don't put "/" in their beginning
// as they are already inside / , in this case /learn

// Outlet - If we don't want to simply replicate the entire
// page component with another component, we want to render
// a new component with our present component only, then we can
// use Outlet
// If there is an outer route and inside there are inner routes,
// When we put Outlet component in our outer route component
// function, the inner routes component would be used here
// and we will be able to see them in UI without having to replace
// the entire UI

// useParams - Now, if we need to get the access to the URL value
// that is being passed, so lets say someone types /posts/13, we need
// to get this value 13 and return the post that is associated with it
// To do so, we can use a hook useParams
// useParams gives us access to the params being passed in the URL

// Outlet - All inner routes will be visible

//////////////////////////////////////////////////

// Connect the URL - 
// First things first, we want to connect your app to the browser's 
// URL: import BrowserRouter and render it around your whole app.

// Add some links - 
// <Link to="/invoices">Invoices</Link> |{" "}
// <Link to="/expenses">Expenses</Link>


// useRoutes hook - 
// Takes an array of objects , these objects are shown below
//

// {
//     path:"/",
//     element: <SomeComponent />,
//     children:[
//         index: true,
//         element: <Home />
//     ]
// }

// We then assign it to a variable, 
// let element = useRoutes ([<array of routes>])
// To use it, we simply do - {element}

/////////////////////////////////////////////

// Link - same as anchor
// replace prop - If used, it completely removes the page from
// history, so if we visit it and move to new page and then press
// back, it will not come back to page having last page because
// the page which has replace option replaces the current page
// instead of going on top of it

// Navlink - same as Link, just it has some extra isActive feature
// using which we can style the css of this link when the current
// page is same as the NavLink page
// Its style attribute can take a function using which we can 
// modify its property

// Navigate - Used to re-direct from one page to another page
// Almost same as Link
// Lets say when we give incorrect url, we got to Not Found page
// Not after reaching this page, we want user to be re-directed to 
// Home page, then we can use Navigate
// As soon as React see Navigate, it navigates the page to the 
// specified route
// <Navigate to="/" />
// Above code will navigate us to root page

// useNavigate hook - used in Not found file

// useLocation hook - If we pass some state with our Link
// we can get this data using useLocation hook
// To use - Just import useLocation hook
// const location = useLocation()
// {location.state} = We can access the state value like this







