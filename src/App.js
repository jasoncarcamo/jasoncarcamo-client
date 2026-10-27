import logo from './logo.svg';
import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import ArtGallery from './ArtGallery/ArtGallery';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

export default class App extends React.Component{
    render(){
        return (
        <>
            <Header/>

            <main id="main-content">
                <Routes>
                    <Route
                    path="/"
                    element={<Home/>}/>
                    
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    
                    <Route
                        path="/art-gallery"
                        element={<ArtGallery />}
                    />
                    
                    <Route
                        path="/about"
                        element={<About/>}/>
                        
                    <Route
                        path="/contact"
                        element={<Contact/>}/>
                </Routes>
            </main>
            
            <Footer/>
        </>
        )
    }
  
}
