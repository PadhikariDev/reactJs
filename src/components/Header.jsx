import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { AlignLeft , X } from "lucide-react";


function Header() {


  const [isClicked,setIsClicked]=useState(false);
  const toogleClick = ()=>{
    setIsClicked(!isClicked);
  }

  const [isScrolling , setIsScrolling] =useState(false);

  useEffect(()=>{
  const handleScroll =()=>{
    const scroll =window.scrollY;
    if(scroll > 80){
      setIsScrolling(true);
    }else{
      setIsScrolling(false);
    }
  };

    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  }

  ,[]);




  return (
    <header className={`${isScrolling ? 'backdrop:blur-sm bg-gradient-to-r from-neutral-900/90 via-neutral-900/90 to-gray-900/90 annimate-in duration-500': 'bg-transparent duration-500 animate-out'} fixed top-0 z-[500] w-full`}>
      <div className="container flex item-center justify-between py-4">
        {/*title or logo*/}
        <div className="z-[10]">
          <a className="font-bold text-white md:text-lg lg:px-10" href="/">Prashant 
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Adhikari</span></a>
        </div>
        {/* Navigation bar */ }
        <Navbar isClicked={isClicked} toogleClick={toogleClick}/>
        {/*Menu buttons */}
        <button onClick={toogleClick} className="text-white cursor-pointer z-[10] flex item-center md:hidden">
            {isClicked ? ( 
          <X size={28}/>
         ) :
          (
          <AlignLeft size={28} />
             )}
        </button>
      </div>
    </header>
  )
}

export default Header