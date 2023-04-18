import Register from "../../Projects/Webistes - Html/Chat App/src/pages/Register";
import Login from "../../Projects/Webistes - Html/Chat App/src/pages/Login";
import Home from "../../Projects/Webistes - Html/Chat App/src/pages/Home";
import "./style.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Projects/Webistes - Html/Chat App/src/context/AuthContext"

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children

  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
