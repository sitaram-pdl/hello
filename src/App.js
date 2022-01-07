import React, { useState, useEffect } from 'react';
import Navigation from './Components/Navigation'
import PNGOverall from './Components/PNGOverall'
import EPHoverall  from './Components/EPHoverall'

import Footer from './Components/Footer';
import './App.css'
import {EPHDistrictForm} from "./Components/EPHDistrictForm";


const App = () => {
    return (
        <>
            <Navigation />
            <main>
                <PNGOverall />
                <EPHoverall />

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
export default App;

