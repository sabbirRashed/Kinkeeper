import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white pt-20 pb-8 mt-20'>
            <div className='w-11/12 max-w-325 mx-auto text-center'>
                <div className='space-y-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold'>KeenKeeper</h2>
                    <p className='text-gray-300'>Your personal shelf of meaningfull connections. Browse, tend and nature the relationships that matter most.</p>
                    <h2 className='text-xl font-bold'>Social Links</h2>
                    <div className='flex justify-center items-center gap-4 mt-6'>
                        <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><RiInstagramFill className='text-black text-xl' /></a>
                        </div>
                        <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><FaFacebookSquare className='text-black text-xl' /></a>
                        </div>
                        <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <a href=""><FaXTwitter className='text-black text-xl' /></a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-600 mt-10'>
                    <p>&copy;2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex justify-end items-center gap-10'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;