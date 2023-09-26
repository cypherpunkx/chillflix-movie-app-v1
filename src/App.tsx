import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Dashboard, Movies, Providers } from "./pages";
import { motion as m, AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/providers" element={<Providers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
