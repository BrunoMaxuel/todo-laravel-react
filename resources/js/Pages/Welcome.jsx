import { useState } from 'react'
import { Link, Head } from '@inertiajs/react';
import img from '../../img/invokevendas_m.png';
const navigation = [
  { name: 'Contato', href: '#' },
]

export default function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white container mx-auto">
        <Head title='Bem-vindo!'/>
        <header>
            <nav className="flex p-5 sm:px-5 justify-between" >
                <div className='flex sm:flex-1'>
                    <a href="" className='flex'>   
                        <img className="h-10 w-auto" src={img}/>
                        <strong className='text-2xl flex items-center ml-2'>Invoke Vendas</strong> 
                    </a>    
                </div>
                <div className='flex gap-4'>
                    {/* Menu do mobile */}
                    <div className="flex sm:hidden">
                        <button className=" rounded-md px-3 text-white bg-gray-700 " onClick={() => setMobileMenuOpen(true)}> 
                            <i class="fas fa-bars text-3xl"></i>
                        </button>
                    </div>
                    <div className='hidden sm:contents'>
                        {navigation.map((item) => (
                        <a key={item.name} href={item.href} className=" rounded-lg bg-gray-200  px-4  text-gray-600 hover:bg-gray-300 flex items-center justify-center">
                            {item.name}
                        </a>
                        ))}
                        
                        <Link href={route('register')} className='bg-gray-200 hover:bg-gray-300  px-3 rounded-lg text-gray-600 flex items-center'>
                            Criar conta
                        </Link>
                        <Link href={route('login')} className='bg-blue-500 hover:bg-blue-700 hover:text-gray-800 text-gray-100 px-3 rounded-lg  flex items-center'>
                            Fazer login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        <section className='flex p-5 h-60 mt-10 bg-gray-300s sm:mt-44  lg:mt-56'>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl sm:text-5xl lg:text-7xl'>
                    Bem-vindo ao Invoke Vendas!
                </h1>
                <p className='lg:mt-10 mt-3 text-lg text-gray-500 sm:text-2xl lg:text-4xl'>
                    Temos um sistema de vendas completo, ele permite realizar vendas rápidas e possui um ótimo desempenho!
                </p>
            </div>
            <div className='flex-1 hidden lg:inline-block sm:flex items-center justify-center'>  
                <img className="ml-56 h-48 animate-bounce" src={img}/>
            </div>
        </section>
    </div>
  )
}

