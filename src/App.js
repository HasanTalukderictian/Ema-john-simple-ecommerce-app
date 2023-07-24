import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Main></Main>
    },
  ]);

  return (
    <div >
      <RouterProvider  router ={router}></RouterProvider>
    
    </div>
  );
}

export default App;
