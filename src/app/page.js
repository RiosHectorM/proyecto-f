import Formulario from '@/components/Formulario';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1>Agregar Datos a la bd</h1>
      <Formulario />
      456456456
    </main>
  );
}
