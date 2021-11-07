import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/app/navbar/Nav";
import SectionContainer from "./components/ui/containers/SectionContainer";
import AllRoutes from "./components/routes/AllRoutes";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <SectionContainer>
          <AllRoutes />
        </SectionContainer>
      </main>
    </Router>
  );
}

export default App;
