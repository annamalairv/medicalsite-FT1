
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import myLoader from "@/utils/common_utils"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from 'next/link'
import { Drawer } from '@mui/material';
import SideNav from './sidenav';
export interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props) => {
    const [windowStatus, setwindow] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const router = useRouter();
    const [selectedRoute, setRoute] = useState<string>();

   
    useEffect(() => {
        if (router != null) {
            if (router.pathname == "/home") {
                setRoute("Home")
            }
            else if (router.pathname == "/contact") {
                setRoute("Contact")
            }
            else if (router.pathname == "/about") {
                setRoute("About us")
            }
        }
        setwindow(true)
        setSideNav(false)
    }, [router])
    const toggleDrawer =
    () =>{
   
      setSideNav(false);
    };

    return (
        < >
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{background:"white" ,padding:"10px 0px",position:"sticky"}} elevation={0} >
                    <Toolbar className='justify-between container mx-auto h-full'>
                    {
                    windowStatus &&
                    <Image loader={myLoader} width={150} height={45} alt={"logo"} src={"assets/logo.png"} />
                }
                <div className={`md:flex gap-4 lg:gap-6 text-primary  items-center hidden`}>
                    <Link className={` ${selectedRoute == "Home" ? "link-highlight" : "hover:font-semibold"}`} href="/home">Home</Link>
                    <Link className={` ${selectedRoute == "About us" ? "link-highlight" : "hover:font-semibold"}`} href="/about">About us</Link>
                    <Link className={` ${selectedRoute == "Contact" ? "link-highlight" : "hover:font-semibold"}`} href="/contact">Contact</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="rounded-full border border-primary border-2 overflow-hidden hidden md:flex items-center">
                        <input type="text" placeholder="Search here" className="h-full w-full px-4 py-4 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2" onClick={()=>{setSideNav(true)}}>
                        <div className="h-1 w-6 md:w-10 bg-primary rounded"></div>
                        <div className="h-1 w-6 md:w-8 bg-primary rounded"></div>
                        <div className="h-1 w-6 md:w-10 bg-primary rounded"></div>
                    </div>
                </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
            anchor={'right'}
            open={sideNav}
            onClose={()=>{toggleDrawer()}}
          >
            <SideNav closeSideNav={()=>{toggleDrawer()}} />
          </Drawer>
        </>
    )
}

export default Header;


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

