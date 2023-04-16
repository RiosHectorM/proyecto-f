const page = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-8 h-screen'>
        <h1 className='text-3xl font-bold mb-4'>Acerca de mi sitio web</h1>
        <p className='mb-4'>
          Este sitio web ha sido creado con Next.js, una herramienta de
          desarrollo web que permite crear aplicaciones web rápidas y
          eficientes.
        </p>
        <p className='mb-4'>
          Puedes encontrar más información acerca de Next.js en su página
          oficial: <a href='https://nextjs.org/'>https://nextjs.org/</a>
        </p>
      </div>
    </>
  );
};

export default page;
