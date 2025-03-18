import React from 'react'
import Preloader from '@/components/Preloader/preloader';
import Footer from '@/components/Footer/footer';
import { FloatingNavDemo } from '@/components/FloatingNavbar/floating-navbar-comp';
import Navbar from '@/components/Navbar/navbar';

const layout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
    
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}

export default layout
