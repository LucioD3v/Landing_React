import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
  {
    id:1,
    title:"Inicio",
    link:"/"
  },
  {
    id:2,
    title:"Nosotros",
    link:"#"
  },
  {
    id:3,
    title:"Contacto",
    link:"#"
  },
  {
    id:4,
    title:"Soporte",
    link:"#"
  },
]

const navbarRedes = [
  {
    id:1,
    title:"Instagram",
    link:"https://www.instagram.com",
    icon:'bi bi-instagram'
  },
  {
    id:2,
    title:"TikTok",
    link:"https://www.tiktok.com",
    icon:'bi bi-tiktok'
  },
]

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

        {/* Logo NavBar */}
        <div>
          <img src={Logo} alt='Logo del Sitio' className='w-[100px]'/>  
        </div>

         {/* Navegacion Desktop */}
        <div>
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarlinks.map((link)=> (
              <li key={link.id}>
                <a 
                className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                transform inline-block duration-300'
                href={link.link}>
                     {link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className='flex space-x-4'>
             {navbarRedes.map((link)=> (
              <li key={link.id}>
                <a 
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block transition-transform duration-300 transform hover:scale-125'
                href={link.link}>
                  <i 
                  className={`${link.icon} sm:text-2xl text-lg text-white hove:text-sky-200 transition-all
                  duration-300`}>
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
