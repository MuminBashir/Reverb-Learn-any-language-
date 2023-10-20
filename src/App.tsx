import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Loader } from "./components";

const Home = lazy(() => import("./components/Home"));
const Learning = lazy(() => import("./components/Learning"));
const Quiz = lazy(() => import("./components/Quiz"));
const Results = lazy(() => import("./components/Results"));
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
