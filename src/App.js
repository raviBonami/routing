
import './App.css';
import {Link, BrowserRouter,Routes, Route, Outlet, useParams} from 'react-router-dom'
import { getInvoices } from './components/srcData';
import PrivateRoute from './private/PrivateRoute';
import Products from './private/Products';
import Profile from './private/Profile';
import Login from './private/Login';

function App() {
  return (
    <div>
      
      {/* <Outlet /> */}
      {/* <div>
      <h1>Hello</h1>
      <Link to="/invoices">Invoices</Link> | { " " }
      <Link to="/expenses" >Expenses</Link> | { " " }
      <Link to="/market">Market</Link>
      
      </div> */}
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Products />} path="/products" exact />
          <Route element={<Profile />} path="/profile" exact />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

export function Invoices(){
  let invoices = getInvoices();
  return(
    <div>
      <h3>Invoices total</h3>
      <nav>
        {invoices.map((invoice) => (
          <Link key={`/invoice/${invoice.number}`} 
          to={`/invoices/${invoice.number}`} > {invoice.name} { }  </Link>
        ))}
      </nav>
    </div>
  )
}


export function Expenses(){
  return(
    <div>
      <h3>Expenses total</h3>
      <Link to="/expenses/moreexpenses" >More expenses</Link>
    </div>
  )
}

export function Home(){
  return (
    <div>
      <h2>HOME</h2>
    </div>
  )
}

export function Market(){
  let params = useParams();
  return (
    <div>
      <h2>Market : {params.marketid}</h2>
    </div>
  )
}