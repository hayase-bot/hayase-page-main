'use client';
import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Menus = [
    // {
    //     label: '문서',
    //     href: '/docs'
    // },
    {
        label: '대시보드',
        href: '/dashboard',
        isDevelop: true,
    },
    {
        label: '서버 상태',
        href: 'https://status.hayasebot.app',
        isDevelop: false,
    },
]

export interface NavigationProps {
    menu: Array<{
        label: string,
        href: string
    }>
}

export default function Navigation() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const onToggleMenu = () => setToggleMenu(!toggleMenu);

    const navHorizon = Menus.map(x => (
        <a
            className='inline-block font-bold text-white opacity-85 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out'
            // href={x.href}
            href={x.isDevelop ? '#!' : x.href}
            onClick={x.isDevelop ? () => alert('준비중입니다.'): undefined}
        >
            {x.label}
        </a>
    ));

    const navVertical = Menus.map(x => (
        <a
            className='font-bold text-white opacity-85 no-underline hover:text-underline text-center'
            // href={x.href}
            href={x.isDevelop ? '#!' : x.href}
            onClick={x.isDevelop ? () => alert('준비중입니다.'): undefined}
        >
            {x.label}
        </a>
    ));

    return (
        <nav className="w-full py-2 px-8 md:px-0 border-b-[#313442] border-b">
            <div className="w-full mx-auto container flex items-center justify-between">
                <a className="flex no-underline hover:no-underline font-bold text-3xl" href="/">
                    <span className="bg-clip-text font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                        Hayase
                    </span>
                </a>
                {/* 수평 메뉴, PC용 */}
                <div className="hidden md:flex w-1/2 justify-end content-center">
                    {navHorizon}
                </div>
                {/* 수직 메뉴, 모바일용 */}
                <div className='md:hidden flex flex-col justify-end'>
                    <Button colorScheme='transparent' onClick={onToggleMenu}>
                        {toggleMenu ? <CloseIcon /> : <HamburgerIcon />}
                    </Button>
                </div>
            </div>
            <Box className='flex flex-col' hidden={!toggleMenu}>
                {navVertical}
            </Box>
        </nav>
    );
}