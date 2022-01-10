import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../components/HomePage';
import { PokeDetails } from '../components/PokeDetails';

export const AppRouter = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/pokemon/:id' element={<PokeDetails />} />
    </Routes>
    </BrowserRouter>
    
    );
}
