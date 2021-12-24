


import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

import Home from './component/Home/Home';
import Login from './component/Login/Login';

import {path} from './Route/Route'

import { Scrollbars } from 'react-custom-scrollbars';

const App =() => {
   //connect voi redux , lay ra du lieu
   const currentUser = useSelector(state => state.users);
   const isLogin = currentUser.loggedIn;
  const linkToDirect = isLogin?'/':'/login';
  

  return (
         // scrollbars dung de tao thanh cuon
            <Scrollbars style={{ width: "100%", height:"100vh" }}>

               <Router>
 
                   <Route path={path.LOGIN}  component={Login}/>
                    <Route path={path.HOME} exact component={Home}/>
   
                 <Redirect to = {linkToDirect}/> 
    
                </Router>
           </Scrollbars>

  );
}

export default App;
