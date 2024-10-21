import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom';

import React from 'react';
import { HomeScreen } from './Pages/HomeScreen';
import { Classes } from './Pages/Classes';

export const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/classes" element={<Classes />} />
                {/* <Route path="/" exact>
                    <HomeScreen />
                </Route>
                <Route path="/classes" exact>
                    <Classes />
                </Route> */}
            </ReactRoutes>
        </Router>
    );
}