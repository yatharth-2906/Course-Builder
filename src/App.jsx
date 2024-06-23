import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import EmptyImage from "./components/EmptyImage";
import Courses from "./components/Courses";
import LinksDisplay from "./components/LinksDisplay";
import ResourceDisplay from "./components/ResourceDisplay";

function App() {
  let [Modules, setModules] = useState([
    // "Introduction to Python",
    // "Engineering Mathematics II",
  ]);
  let [Links, setLinks] = useState([
    // { url: "https://www.google.com/", url_name: "Google" },
    // { url: "https://www.youtube.com/", url_name: "YouTube" },
  ]);
  let [Resources, setResources] = useState([
    // "Python Book", "React Roadmap"
  ]);

  let emptyImage =
    Links.length === 0 && Resources.length === 0 ? <EmptyImage /> : null;

  return (
    <>
      <Header
        Modules={Modules}
        setModules={setModules}
        Links={Links}
        setLinks={setLinks}
        Resources={Resources}
        setResources={setResources}
      />
      {emptyImage}
      <Courses Modules={Modules} setModules={setModules} />
      <LinksDisplay Links={Links} setLinks={setLinks} />
      <ResourceDisplay Resources={Resources} setResources={setResources} />
    </>
  );
}

export default App;
