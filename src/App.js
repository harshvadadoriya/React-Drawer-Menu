import React from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawermenu from './Menu/Drawermenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import './App.css';

const App = () => {
	return (
		<Router>
			<Drawermenu />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/skills" element={<Skills />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
