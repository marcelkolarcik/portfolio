import React, {useCallback, useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import classes from './MainNavigation.module.css';
import {useLocation} from "react-router-dom";


export default function MainNavigation() {
    const [clickedLink, setClickedLink] = useState('');
    const [colorChange, setColorChange] = useState(false);
    const links = ['home', 'about', 'service', 'portfolio', 'contact']
    const setActiveNavLinkOnScroll = useCallback(() => {
        ['about', 'service', 'portfolio', 'contact', 'home'].map(comp => {
            return isInViewport(comp) ? setClickedLink('#' + comp) : ''
        })
    }, []);


    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }
    const changeNavbarColor = useCallback(() => {
        if (window.scrollY >= 100) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }

        setActiveNavLinkOnScroll();
    }, [setActiveNavLinkOnScroll]);

    function isInViewport(element) {
        let box = document.querySelector('.' + element);
        const rect = box.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    const {hash} = useLocation()

    useEffect(() => {

        setClickedLink(hash)

    }, [hash])

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', () => changeNavbarColor);
        };
    }, [changeNavbarColor])


    return (

        <Navbar sticky={'top'} collapseOnSelect bg={colorChange ? 'dark' : 'transparent'}
                variant="dark" expand={'md'}>
            <Container fluid className={'mt-3 '}>
                <Navbar.Brand>
                    <Nav.Link className={'mx-3 nav-link text-light'} href="#home"><span
                        className={'display-6 fw-bold'}>MK</span></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((link, idx) =>
                            (
                                <Nav.Link
                                    key={idx}
                                    className={clickedLink === '#' + link ?
                                        classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                        classes.nav_link_hover + ' mx-3 nav-link fw-bold'}

                                    href={'#' + link}>
                                    {capitalize(link)}</Nav.Link>
                            ))}


                    </Nav>
                </Navbar.Collapse>
            </Container>
            <span className={classes.divider}>x</span>
        </Navbar>


    );
}