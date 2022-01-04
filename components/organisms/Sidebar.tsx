import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    AcademicCapIcon,
    CogIcon,
    LibraryIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';

const Sidebar = () => {
    const router = useRouter();
    return (
        <nav tw='bg-blue-500 flex flex-wrap items-center justify-between px-6 py-4 relative rounded-r-3xl z-10 md:block md:bottom-0 md:fixed md:flex-nowrap md:flex-row md:left-0 md:overflow-hidden md:overflow-y-auto md:top-0 md:w-96'>
            <div tw='flex flex-wrap items-center justify-between mx-auto px-0 w-full md:flex-col md:flex-nowrap md:items-stretch md:min-h-full'>
                {/* Toggler */}
                <button
                    tw='bg-transparent border border-solid border-transparent cursor-pointer leading-none opacity-50 px-3 py-1 rounded text-black text-xl md:hidden'
                    type='button'
                    // onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                >
                    {/* <i tw='fa-bars fas'></i> */}
                </button>
                {/* Brand */}
                <Link href='/'>
                    <Image
                        src={'/assets/logo-unsia.svg'}
                        width='180'
                        height='40'
                        layout='fixed'
                    ></Image>
                </Link>
                {/* User */}
                <ul tw='flex flex-wrap items-center list-none md:hidden'>
                    <li tw='inline-block relative'></li>
                    <li tw='inline-block relative'></li>
                </ul>
                {/* Collapse */}
                <div tw='absolute flex-1 h-auto items-center left-0 overflow-x-hidden overflow-y-auto right-0 rounded shadow top-0 z-40 md:flex md:flex-col md:items-stretch md:mt-4 md:opacity-100 md:relative md:shadow-none'>
                    {/* Collapse header */}
                    <div tw='block border-b border-gray-200 border-solid mb-4 pb-4 md:hidden md:min-w-full'>
                        <div tw='flex flex-wrap'>
                            <div tw='w-6/12'>
                                {/* <Link href="/">
                    <a
                      href="#pablo"
                      tw="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </Link> */}
                            </div>
                            <div tw='flex justify-end w-6/12'>
                                <button
                                    type='button'
                                    tw='bg-transparent border border-solid border-transparent cursor-pointer leading-none opacity-50 px-3 py-1 rounded text-black text-xl md:hidden'
                                    // onClick={() => setCollapseShow("hidden")}
                                >
                                    {/* <i tw='fa-times fas'></i> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <form tw='mb-4 mt-6 md:hidden'>
                        <div tw='mb-3 pt-0'>
                            <input
                                type='text'
                                placeholder='Search'
                                tw='bg-white border border-gray-500 border-solid font-normal h-12 leading-snug outline-none placeholder-blue-300 px-3 py-2 rounded shadow-none text-base text-blue-600 w-full focus:outline-none'
                            />
                        </div>
                    </form>

                    <ul tw='flex flex-col justify-between list-none md:flex-col md:min-w-full'>
                        <div>
                            <li
                                className='group'
                                tw='cursor-pointer items-center p-4 rounded-3xl hover:bg-yellow-200 hover:text-yellow-800'
                            >
                                <Link href='/dashboard'>
                                    <a tw='flex items-center'>
                                        <div tw='bg-blue-500 p-1 rounded-md group-hover:bg-yellow-100'>
                                            <ViewGridIcon tw='h-6 text-gray-800 w-6 group-hover:text-yellow-800' />
                                        </div>
                                        <h3 tw='ml-3 text-gray-700 group-hover:text-yellow-800'>
                                            Dashboard
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li
                                className='group'
                                tw='cursor-pointer items-center p-4 rounded-3xl hover:bg-yellow-200 hover:text-yellow-800'
                            >
                                <Link href='/class'>
                                    <a tw='flex items-center'>
                                        <div tw='bg-blue-500 p-1 rounded-md group-hover:bg-yellow-100'>
                                            <LibraryIcon tw='h-6 text-gray-800 w-6 group-hover:text-yellow-800' />
                                        </div>
                                        <h3 tw='ml-3 text-gray-700 group-hover:text-yellow-800'>
                                            Kelas
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li
                                className='group'
                                tw='cursor-pointer items-center p-4 rounded-3xl hover:bg-yellow-200 hover:text-yellow-800'
                            >
                                <Link href='/gpa'>
                                    <a tw='flex items-center'>
                                        <div tw='bg-blue-500 p-1 rounded-md group-hover:bg-yellow-100'>
                                            <AcademicCapIcon tw='h-6 text-gray-800 w-6 group-hover:text-yellow-800' />
                                        </div>
                                        <h3 tw='ml-3 text-gray-700 group-hover:text-yellow-800'>
                                            Nilai
                                        </h3>
                                    </a>
                                </Link>
                            </li>
                        </div>

                        <li
                            className='group'
                            tw='cursor-pointer items-center p-4 rounded-3xl hover:bg-yellow-200'
                        >
                            <Link href='/settings'>
                                <a tw='flex items-center'>
                                    <div tw='bg-blue-500 p-1 rounded-md group-hover:bg-yellow-100'>
                                        <CogIcon tw='h-6 text-gray-800 w-6 group-hover:text-yellow-800' />
                                    </div>
                                    <h3 tw='ml-3 text-gray-700 group-hover:text-yellow-800'>
                                        Pengaturan
                                    </h3>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
