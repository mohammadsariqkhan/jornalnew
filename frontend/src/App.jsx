
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import Upload from "./screens/Upload.jsx";
import AuthComponent from "./components/AuthComponent.jsx";
import Register from "./screens/Register.jsx";
import Editor from "./screens/Editor.jsx";
import EditorAuth from "./components/EditorAuth.jsx";
import Payment from "./screens/Payment.jsx";
import Profile from "./screens/Profile.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
          <Home></Home>
      )
    },
    {
      path: '/login',
      element: (
          <Login></Login>
      )
    },
    {
      path: '/payment',
      element: (
          <Payment></Payment>
      )
    },
    {
      path: '/register',
      element: (
          <Register></Register>
      )
    },
    {
      path: '/upload',
      element: (
          <AuthComponent>
          <Upload></Upload>
          </AuthComponent>
      )
    },
    {
      path: '/profile',
      element: (
          <AuthComponent>
            <Profile></Profile>
          </AuthComponent>
      )
    },
    {
      path: '/editor',
      element: (
          <AuthComponent>
          <EditorAuth>
            <Editor></Editor>
          </EditorAuth>
          </AuthComponent>
      )
    }
    ])
    
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
