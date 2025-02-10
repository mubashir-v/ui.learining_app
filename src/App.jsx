import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import RootLayout from "./layout/RootLayout";
import Home from "./components/pages/home/Home";
import CourseDetails from "./components/pages/course/details/CourseDetails";
import LearningPath from "./components/pages/course/learningPath/LearningPath";
import Login from "./components/pages/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<div>Redister</div>} />
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/course/:course-slug" element={<CourseDetails />} />
            <Route
              path="/course/:course-slug/learning-path"
              element={<LearningPath />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
