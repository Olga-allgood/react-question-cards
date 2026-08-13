import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { AddQuestion } from "./pages/AddQuestion/AddQuestion";
// import { AddQuestion } from "./pages/AddQuestion/AddQuestion.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/forbidden"
            element={<div>Forbidden</div>}
          />
          <Route
            path="/addquestion"
            element={<AddQuestion />}
          />
          {/* <Route
            path="/addquestion"
            element={<AddQuestion />}
          /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
};