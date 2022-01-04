import Image from 'next/image';
import React from 'react';
import Button from '../../components/atoms/Button';
import FormInput from '../../components/atoms/FormInput';

const Login = () => {
    return (
        <div tw='bg-gray-100 grid grid-cols-2 h-screen'>
            <div tw='flex flex-col justify-between'>
                <div tw='p-8 w-full'>
                    <Image
                        src={'/assets/logo-unsia.svg'}
                        width='180'
                        height='40'
                        layout='fixed'
                    ></Image>
                </div>
                <div tw='flex items-center justify-center'>
                    <div>
                        <h1 tw='font-bold'>Selamat Datang Kembali!</h1>
                        <h4 tw='text-gray-600'>
                            Masukkan ID anda untuk mulai belajar
                        </h4>
                        <div tw='flex flex-col mt-7 space-y-5'>
                            <FormInput
                                label='E-mail'
                                placeholder='Masukkan E-mail Anda'
                            />
                            <FormInput
                                label='Password'
                                placeholder='Masukkan Password Anda'
                                type='password'
                            />
                        </div>
                        <div tw='mt-24'>
                            <Button variant='primary' isBlock>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
                <div tw='font-bold py-5 text-base text-center text-gray-300'>
                    © 2022 UNSIA Core Developer Team
                </div>
            </div>
            <div tw='h-auto relative w-auto'>
                <Image
                    src={'/assets/gedung-unsia.png'}
                    layout='fill'
                    objectFit='cover'
                ></Image>
            </div>
        </div>
    );
};

export default Login;
