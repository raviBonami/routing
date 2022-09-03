import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Invoices, Expenses, Home } from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom'
// import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { Market } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Extra content from extra route</p>} ></Route>
      </Routes>

      <Routes>
        {/* <App /> */}
        {/* <Home /> */}
        {/* <Route path="/" element={<h3>JSX in element</h3>}/> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/learn" element={<Navigate replace to="/about" />}/> */}
        {/* <Route path="/about" element={<About />}> */}
        {/* <Route path="/course" element={<Courses />}></Route> */}
        {/* <Route path=":courseid" element={<CourseId />} /> */}
        {/* </Route> */}

        {/* <Route path="/" element={<App />} >
          <Route path="invoices" element={<Invoices />} >

          </Route>
          <Route path="expenses" element={<Expenses />} >
            <Route index element={<Expenses />} />
            <Route path="moreexpenses" element={<p>More details on expenses</p>} ></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} ></Route>
        <Route path="/market/:marketid" element={<Market />} ></Route>

      </Routes>
      {/* <App /> */}
    {/* </BrowserRouter> */} 
  </React.StrictMode>
);


function Courses() {

  return (
    <div>
      <h3>Course route</h3>
      <Outlet />
    </div>
  )
}

function CourseId() {
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL params : {courseid}</h1>
    </div>
  )
}

const Bundle = () => {
  return (
    <div>
      <h3>Bundle route</h3>
      <Link to="/learn/course" >Courses</Link> |
      <Link to="/learn/bundle" >Bundle</Link>
    </div>
  )
}


// We can use this route layout component inside another route
// shown below - 
  <Route path="/details/*" element={<RoutesLayout />} ></Route>
function RoutesLayout(){
  return (
    <Routes>
    <Route path="/">
        <Route path="/books" element={<p>Text 1</p>} />
        <Route path="/course" element={<h2>Text 2</h2>} />
    </Route>
    </Routes>
  )
}