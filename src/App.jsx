
import Header from './components/Header';
import About from './sections/About';
import Kyler from './sections/Kyler';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
const App = () => {
  return (<>
    {/* Header section */}
    <Header/>
    <Kyler/>
    <hr className="my-10 border-t-2 border-gray-300 w-full mx-auto max-w-7xl rounded-full shadow-sm" />
    <About/>
    <hr className="my-10 border-t-2 border-gray-300 w-full mx-auto max-w-7xl rounded-full shadow-sm" />
    <Projects/>
    <hr className="my-10 border-t-2 border-gray-300 w-full mx-auto max-w-7xl rounded-full shadow-sm" />
    <Skills/>
    <hr className="my-10 border-t-2 border-gray-300 w-full mx-auto max-w-7xl rounded-full shadow-sm" />
    <Contact/>
    <hr className="my-10 border-t-2 border-gray-300 w-full mx-auto max-w-7xl rounded-full shadow-sm" />
    </>
  );
}

export default App