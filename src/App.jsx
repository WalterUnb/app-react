import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const Plans = React.lazy(() => import('./components/Plans'));


export default function App() {
  return (
    <HashRouter>
            <Suspense>
                <Routes>
                    <Route path="*" name="Home Page" element={<Home />} />
                    <Route path="/plans" name="Plans Page" element={<Plans />} />
                </Routes>
            </Suspense>
        </HashRouter>
  )
}