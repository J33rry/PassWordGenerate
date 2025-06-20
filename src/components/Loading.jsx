"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

import SplineScene from "./splineScene";

function LoadingPage() {
    const textRef = useRef(null);

    gsap.registerPlugin(ScrambleTextPlugin);
    useGSAP(() => {
        gsap.to(textRef.current, {
            scrambleText: {
                text: "Loading...",
                chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                speed: 0.2,
                revealDelay: 0.2,
            },
            duration: 2,
            delay: 0.2,
        });
        gsap.to(textRef.current, {
            opacity: 0,
            scale: 2,
            duration: 1,
            ease: "power2.inOut",
            delay: 3,
            onComplete: () => {
                textRef.current.style.display = "none";
            },
        });
    }, []);
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <SplineScene />

            <div className="h-screen flex items-center justify-center">
                <h1
                    ref={textRef}
                    className="text-3xl lg:text-6xl tracking-widest text-white font-loading"
                >
                    XXXXXXXXX
                </h1>
            </div>
        </div>
    );
}

export default LoadingPage;
