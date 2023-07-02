import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import HocDemoPage from '../../pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from '../../pages/HooksDemoPage/HooksDemoPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';

const AppRoutes = () => {
  return (
    // Let's config the routing here
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="hoc-demo" element={<HocDemoPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/hooks-demo" element={<HooksDemoPage />} />
      <Route path="/shop-page" element={<ShopPage />} />
      <Route path="/gallery-page" element={<GalleryPage />} />
    </Routes>
  );
}

export default AppRoutes;
