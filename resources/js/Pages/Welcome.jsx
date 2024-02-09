import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Bem-vindo" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen   dark:bg-gray-900">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 ">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className=" dark:text-gray-400 dark:hover:text-white "
                        >
                            Voltar ao Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold dark:text-gray-400 dark:hover:text-white "
                            >
                                Fazer login
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-10 font-semibold dark:text-gray-400 dark:hover:text-white "
                            >
                                Registrar
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-2 lg:p-5">
                    
                       
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
