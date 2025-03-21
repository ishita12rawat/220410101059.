import logo from './logo.svg';
import './App.css';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Post from './componet/Post';
import Postform from './componet/Postform';
import Navbar from './componet/Navbar';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Home/></>
    },
    {
      path:'/signup',
      element:<><Signup/></>
    },{
      path:'/post',
      element:<><Post/></>
    },
    {
      path:'/postform',
      element:<><Postform/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}>
      <Navbar/>
    </RouterProvider>
    </>
  );
}

export default App;
