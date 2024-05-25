

import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UseAuth from './hooks/UseAuth';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import {  Vortex } from 'react-loader-spinner';

function App() {

  const { loading , user} = UseAuth()
  console.log(loading , user);

  const location = useLocation()
  const [path, setPath] = useState('HOME')
  const pathName = location.pathname.replaceAll('/', '').toUpperCase()
  // console.log(loader);
  useEffect(() => {
    if (pathName) {
      setPath(pathName)
    }
    if (!pathName) {
      setPath('HOME')
    }
  }, [pathName])

  // console.log(user,loading);
  if (!loading) return <div className="flex justify-centerflex justify-center items-center h-screen"><Vortex
  visible={true}
  height="150"
  width="150"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  /></div>

  return (
    <>
      <Helmet>
        <title>SM FOOD || {path}</title>
      </Helmet>
      <div className='poppins'>
        <Navbar />
        <div className='min-h-[calc(100vh-337px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
