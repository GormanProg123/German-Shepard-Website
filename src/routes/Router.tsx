import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";
import { Achievement } from "../pages/Achievements/Achievement";
import { MaleDog } from "../pages/MaleDog/MaleDog";
import { FemaleDog } from "../pages/FemaleDog/FemaleDog";
import { Puppies } from "../pages/Puppies/Puppies";
import { CareTips } from "../pages/CareTips/CareTips";
import { Gallery } from "../pages/Gallery/Gallery";
import { Contact } from "../pages/Contacts/Contact";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/males" element={<MaleDog />} />
        <Route path="/females" element={<FemaleDog />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/tips" element={<CareTips />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
