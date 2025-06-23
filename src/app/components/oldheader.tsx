import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


function Header() {
    return (
        <>

            <header className="container w-[100%] mx-auto   items-center justify-between ">
                <div className=" hidden md:block  lg:block">
                    <div style={{ fontFamily: 'Tiro Gurmukhi' }} className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-[1026px] h-auto md:h-[42px] mx-auto gap-4 sm:gap-0 md:gap-[36px] text-sm">
                        <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-between w-full whitespace-nowrap">
                            <li className="flex items-center justify-center p-2">Hindu</li>
                            <li className="flex items-center justify-center p-2">Muslim</li>
                            <li className="flex items-center justify-center p-2">Sikh</li>
                            <li className="flex items-center justify-center p-2">Christian</li>
                            <li className="flex items-center justify-center p-2">Buddh</li>
                            <li className="flex items-center justify-center p-2">Jain</li>
                        </ul>
                        <div className="w-px h-full bg-gray-300 block md:block sm:hidden "></div>
                        <ul className="flex flex-row md:flex-nowrap justify-center md:justify-between w-full whitespace-nowrap">
                            <li className="flex items-center justify-center p-2">USA</li>
                            <li className="flex items-center justify-center p-2">Canada</li>
                            <li className="flex items-center justify-center p-2">UK</li>
                            <li className="flex items-center justify-center p-2">UAE</li>
                            <li className="flex items-center justify-center whitespace-nowrap p-2">New Zealand</li>
                            <li className="flex items-center justify-center p-2">Australia</li>
                            <li className="flex items-center justify-center p-2">India</li>
                        </ul>
                    </div>
                </div>

                <div className=" bg-black/40 w-full  h-[92px]     z-10 items-center absolute">
                    <div className=" w-full mx-auto max-w-[1280px] px-[51px] h-[92px] flex items-center  justify-between shadow-sm ">

                        <div className="">

                            <Image src="/primerishta.png" width={142} height={52} className="h-[52px] w-[142px]" alt='logo'></Image>

                        </div>


                        <nav className="flex items-center gap-4 text-sm text-white font-bold text-[16px] ">
                            <Link href="#" className="  hover:text-pink-600 transition">Success stories</Link>


                            <div className="relative group">
                                <Button className="flex items-center gap-1 bg-transparent hover:text-pink-600 transition  font-bold text-[16px]">
                                    <Image alt="call" src="/customer-service.png" width={32} height={32} />
                                    Help
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </svg>
                                </Button>

                                <ul className="absolute top-full left-0 mt-2 bg-white text-gray-700 shadow-md rounded-md text-sm w-40 hidden group-hover:block z-10">
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
                                </ul>
                            </div>


                            <Link href="#" className="px-4 py-2 border border-white rounded w-[163px] text-center hover:bg-pink-500 transition">Login</Link>
                        </nav>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;
