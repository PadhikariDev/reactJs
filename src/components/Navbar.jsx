import { useEffect, useState } from "react"



const navigation = [
    {title:"home" ,url:"#home"},
    {title:"about" ,url:"#about"},
    {title:"project" ,url:"#project"},
    {title:"skills" ,url:"#skills"},
    {title:"contact" ,url:"#contact"},
]



function Navbar({isClicked,toogleClick}) {


    const [activeLink,setActiveLink] =useState('home');

    useEffect(()=>{
            const handleScroll =()=>{
            const scrollPositon=window.scrollY;
            const sections = document.querySelectorAll('section[id]');


            sections.forEach(section =>{
                if(section){
                    const sectionTop =section.offsetTop;
                    const sectionHeight =section.offsetHeight;

                  if(scrollPositon >= sectionTop && scrollPositon <= sectionTop+sectionHeight){
                    setActiveLink(section.id)
                  }
                }
            })
            };

            window.addEventListener('scroll',handleScroll);
            return ()=>{
                window.removeEventListener('scroll',handleScroll);
            }
    },[])



  return (<>
    <nav className={`${ isClicked ? `translate-x-0` : '-translate-x-[190.25rem]'} fixed left-0 top-0 h-screen w-full flex item-center justify-start transition-all duration-250 lg:hidden`} >
        <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-22 ">
            {navigation.map(item =>(
                <li key={item.title} className="mb-4 text-lg font-medium capitalize">
                   <a className={`${ activeLink === item.title ? 'text-blue-600' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                        href={item.url} onClick={()=>toogleClick()} >
                         {item.title}
                    </a>
                </li>
            ))}
        </ul>

    </nav>

        {/* Desktop navigation*/}

        <nav className=" hidden md:inline-flex px-10">
            <ul className="flex gap-10 capitalize">
                {navigation.map(item=>(
                    <li key={item.title} className="inline-block font-medium">
                        <a className={`
                        ${ activeLink === item.title ? 'text-blue-600' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                        href={item.url} >
                         {item.title}
                    </a>

                    </li>
                ))}
            </ul>
        </nav>

    </>
  )
}

export default Navbar