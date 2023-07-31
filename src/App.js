import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop.js';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { ProductandCartLoader } from './Loaders/ProductsandCartloader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => {
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          loader:ProductandCartLoader,
          
          element:<Orders></Orders>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'about', element:<About></About>
        },
        {
          path:'login', element:<Login></Login>
        },
        {
          path:'register', element:<Register></Register>
        },
      ]
    },
    
  ]);

  return (
    <div >
      <RouterProvider  router ={router}></RouterProvider>
    
    </div>
  );
}

export default App;
