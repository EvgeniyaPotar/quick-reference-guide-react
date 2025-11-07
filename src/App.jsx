import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./layouts/Layout.jsx";
import LayoutWithNav from "./layouts/LayoutWithNav.jsx";
import Topic from "./pages/Topic.jsx";
import { topics } from "./utils/topics.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <div className="text-[#333637] dark:text-white bg-white dark:bg-[#282727]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/" element={<LayoutWithNav />}>
          {topics.map((topic) => {
            return (
              <Route
                path={topic.path}
                element={<Topic title={topic.title}>{topic.content}</Topic>}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
