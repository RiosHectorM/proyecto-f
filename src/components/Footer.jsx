function Footer() {
  return (
    <footer className='bg-gray-800 py-8 bottom-0 w-full'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='text-white text-lg font-bold mb-4'>Mi sitio web</h4>
            <p className='text-gray-400'>
              Este sitio web ha sido creado con Next.js y Tailwind CSS.
            </p>
          </div>
          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='text-white text-lg font-bold mb-4'>Links útiles</h4>
            <ul className='list-none'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Inicio
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Acerca de
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-4 md:mb-0'>
            <h4 className='text-white text-lg font-bold mb-4'>
              Redes sociales
            </h4>
            <ul className='list-none'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
