import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage.js'
import myaccount from './Components/myaccount.js'
import FormDialog from './Components/FormDialog'
import FormDialog2 from './Components/FormDialog2'
import Axios, { AxiosResponse } from 'axios';
import ProtectedRoutes from './Components/ProtectedRoutes'
import Navbar from './Components/Navbar'

  



 function App()  {

  const [username, setUsername] = React.useState('');
   var  [isAuth, setIsAuth] = React.useState()

  React.useEffect(() => {

      Axios.get("https://surveyeu.herokuapp.com/user", {
        withCredentials: true
      }).then( async function (res: AxiosResponse){  setIsAuth(res.data);  console.log(res.data)  })

  }, []);


  return (
    <div className="App">

    <BrowserRouter >
    <Navbar isAuth={isAuth} />
    
    <Route isAuth={isAuth} path='https://puneetkathar1.github.io/Surveyu'  exact component={Homepage} />
    <ProtectedRoutes  path='https://puneetkathar1.github.io/Surveyu/myaccount' component={myaccount} isAuth={isAuth} />
    </BrowserRouter>

    <FormDialog setUsername={setUsername} />
    <FormDialog2 setIsAuth={setIsAuth} username = {username} />


    
    </div>
  );
}

export default App;
