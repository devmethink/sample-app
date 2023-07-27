import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Store from "./app/context/AppContext";
import Sidebar from "./app/components/Sidebar/Sidebar";
import AllRoutes from "./app/components/Routes/AllRoutes";

const App = () => {
  return (
    <Store>
      <Router>
        <div className="app">
          <Sidebar />
          <AllRoutes />
        </div>
      </Router>
    </Store>
  );
};

export default App;
