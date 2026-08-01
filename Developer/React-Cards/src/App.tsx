import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/forbidden" element={<div>forbidden</div>} />
          <Route path="/addquestion" element={<div>add question</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}; 