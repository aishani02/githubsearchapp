import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import { UserContextProvdier } from "./UserContext";
import Alert from "./Alert"
import { AlertProvider } from "./AlertContext";
import User from "./User"

function App() {
  return (<>

<UserContextProvdier>
    
    <AlertProvider>
   <Router>
    <div className="flex flex-col justify-between h-screen">
     
      <Navbar />

      <main className="container mx-auto px-3 pb-12">
      <Alert />
        <Routes>
        
        <Route exact  path="/"  element={<Home/>} />
        <Route   path="/about"  element={<About/>} />
        <Route path="/User/:id"   element={<User/>} />
         <Route   path="/*"  element={<NotFound/>} />

              


        </Routes>
        
      </main>
      <Footer />
    </div>
    </Router>
    </AlertProvider>
    </UserContextProvdier>

  </>


  
  );
}

export default App;
