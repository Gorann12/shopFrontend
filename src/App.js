import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/app/navbar/Nav";
import SectionContainer from "./components/ui/containers/SectionContainer";
import CategoryRoutes from "./components/routes/CategoryRoutes";
import ShopRoutes from "./components/routes/ShopRoutes";
import ItemRoutes from "./components/routes/ItemRoutes";
import ListRoutes from "./components/routes/ListRoutes";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <SectionContainer>
          <CategoryRoutes />
          <ShopRoutes />
          <ItemRoutes />
          <ListRoutes />
        </SectionContainer>
      </main>
    </Router>
  );
}

export default App;
