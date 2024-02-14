// import { Link, Head } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     return (
//         <>
//             <Head title="Bem-vindo" />
//             <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen   dark:bg-gray-900">
//                 <div className="sm:fixed sm:top-0 sm:right-0 p-6 ">
//                     {auth.user ? (
//                         <Link
//                             href={route('dashboard')}
//                             className=" dark:text-gray-400 dark:hover:text-white "
//                         >
//                             Voltar ao Dashboard
//                         </Link>
//                     ) : (
//                         <>
//                             <Link
//                                 href={route('login')}
//                                 className="font-semibold dark:text-gray-400 dark:hover:text-white "
//                             >
//                                 Fazer login
//                             </Link>

//                             <Link
//                                 href={route('register')}
//                                 className="ml-10 font-semibold dark:text-gray-400 dark:hover:text-white "
//                             >
//                                 Registrar
//                             </Link>
//                         </>
//                     )}
//                 </div>

//                 <div className="max-w-7xl mx-auto p-2 lg:p-5">
                    
                       
//                 </div>
//             </div>


            

//             <style>{`
//                 .bg-dots-darker {
//                     background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
//                 }
//                 @media (prefers-color-scheme: dark) {
//                     .dark\\:bg-dots-lighter {
//                         background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
//                     }
//                 }
//             `}</style>
//         </>
//     );
// }


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
            <section className='flex p-5 h-60 mt-16 bg-gray-300s sm:mt-44  lg:mt-56'>
               <div className='flex-1'>
                    <h1 className='font-bold text-2xl sm:text-5xl lg:text-7xl'>
                        Bem-vindo ao nosso site!
                    </h1>
                    <p className='lg:mt-10   lg:mr-56 text-lg text-gray-400 sm:text-2xl lg:text-4xl'>
                        Temos um sistema de vendas completo, ele permite realizar vendas rápidas e possui um ótimo desempenho!
                    </p>
               </div>
               <div className='flex-1 sm:hidden lg:inline-block '>  
                    <img className="h-48 w-auto animate-bounce" src={img}/>
               </div>
            </section>
        </div>
  )
}

