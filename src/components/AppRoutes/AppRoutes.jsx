import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignUpPage/SignupPage';
import UploadPage from '../../pages/UploadPage/UploadPage';
import ExplorePage from '../../pages/ExplorePage/ExplorePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
    )
}

export default AppRoutes