import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import RecentProjects from "./components/RecentProjects";



function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <AboutMe />
      <RecentProjects />
    </div>
  );
}

export default App;
