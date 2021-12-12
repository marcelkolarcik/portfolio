import React from "react";
import About from "../components/home/About";
import Service from "../components/home/Service";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";
import Welcome from "../components/home/Welcome";
import MainNavigation from "../ui/MainNavigation";
import Hero from "../components/home/Hero";
import ErrorBoundary from "../ui/ErrorBoundary";

export default function Home() {

    return (
        <>

            <Welcome>

                <MainNavigation/>
                <ErrorBoundary component={'home'}>
                    <Hero/>
                </ErrorBoundary>
                <ErrorBoundary component={'about'}>
                    <About/>
                </ErrorBoundary>
                <ErrorBoundary component={'service'}>
                    <Service/>
                </ErrorBoundary>
                <ErrorBoundary component={'portfolio'}>
                    <Portfolio/>
                </ErrorBoundary>
                <ErrorBoundary component={'contact'}>
                    <Contact/>
                </ErrorBoundary>

            </Welcome>
        </>

    );

}