import HomePage from "./components/HomePage";
import OfferingPage from "./components/OfferingPage";
import Footer from "./components/Footer";
import { useState } from "react";
import NothingFound from "./components/NothingFound";
import Navigation from "./components/Navigation";
import ChurchList from "./components/ChurchList";

function App() {
  const [activePage, setActivePage] = useState(1);

  const changeViewToMainPage = () => {
    setActivePage(1);
  };

  const getContent = () => {
    switch (activePage) {
      case 1:
        return <HomePage setActivePage={setActivePage} />;
      case 2:
        return <ChurchList />;
      case 3:
        return <OfferingPage />;
      default:
        return <NothingFound goToHomePage={changeViewToMainPage} />;
    }
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {getContent()}
      <Footer />
    </>
  );
}

export default App;
