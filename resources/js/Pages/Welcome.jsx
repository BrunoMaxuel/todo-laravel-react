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
const navigation = [
  { name: 'Sobre o sistema', href: '#' },
  { name: 'Contato', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-white">
            <Head title='Bem-vindo!'/>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex p-6 sm:px-8" aria-label="Global">
                    <div className='flex sm:flex-1'>
                        <div className="flex">
                            <a href="">   
                                <img
                                    className="h-10 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Página inicial"
                                />
                            </a>    
                            <strong className='text-xl flex items-center ml-2'>Invoke Vendas</strong> 
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        {/* Menu do mobile */}
                        <div className="flex  sm:hidden">
                            <button
                            className="inline-flex items-center justify-center rounded-md p-4  bg-black"
                            onClick={() => setMobileMenuOpen(true)}
                            > 
                            </button>
                        </div>
                            {navigation.map((item) => (
                            <a key={item.name} href={item.href} className=" rounded-lg bg-gray-200  px-4  text-gray-600 hover:bg-gray-300 flex items-center justify-center">
                                {item.name}
                            </a>
                            ))}
                        
                        <Link href={route('register')} className='bg-gray-200 hover:bg-gray-300  px-3 rounded-lg text-gray-600 flex items-center'>
                            Cadastrar
                        </Link>
                        <Link href={route('login')} className='bg-blue-500 hover:bg-blue-700 hover:text-gray-800 text-gray-100 px-3 rounded-lg  flex items-center'>
                            Fazer login
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl  lg:pt-36">
                    <div className="text-start">
                        <h1 className="font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Bem-vindo ao nosso site, aqui temos o sistema que você precisa!
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Temos um sistema de vendas completo, de venda rápida com bom desempenho!
                            <p>Do jeitinho que você gosta, rápido e fácil de usar.</p>
                        </p>
                        <div className="mt-10 flex items-center  gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-7 py-3  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Acesse já!
                            </a>
                            <a href="" className=" text-gray-900">
                            Ver tutorial <span aria-hidden="true"> → </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

