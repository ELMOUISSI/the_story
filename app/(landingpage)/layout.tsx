import React from 'react'
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';


const RootLayout =({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
       <Navbar/>
      <main>
        <div>{children}</div>
      </main>
      <Footer/>
        </div>
      
    );
  }
  
export default  RootLayout;