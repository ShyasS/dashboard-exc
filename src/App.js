import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ProductListing } from "./container/ProductListing";
import { ProductDetail } from "./container/ProductDetail";
import {FunctionComponents} from './ContextComponents/FunctionComponent';
import {Funct2Components} from './ContextComponents/Funct2Components';
import {ChildComponents} from './ContextComponents/ChildComponents';
import { Auth } from "./ContextAPI/Auth";
import { Header } from "./ContextAPI/Header";
import { UserContextProvider } from "./ContextAPI/UserContext";
function App() {
  return (
  //   <Router>
  //     <Header/>
  //    <Routes>
  // <Route path = "/" element = {<ProductListing/>}/>
  // <Route path = "/product/:id" element = {<ProductDetail/>}/>
  //    </Routes>
  //   </Router>

<UserContextProvider>
<Header/>
<Auth/>
</UserContextProvider>

  );
}

export default App;
