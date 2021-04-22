import React from 'react';
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { BsFillPeopleFill} from "react-icons/bs";
import { BiMessageSquareDetail, BiSupport } from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <HiDocumentReport/>,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AiOutlineShoppingCart/>,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <BsFillPeopleFill/>,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <BiMessageSquareDetail/>,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiSupport/>,
        cName: 'nav-text',
    }
]