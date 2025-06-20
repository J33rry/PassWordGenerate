"use client";
import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SplineScene = () => {
    const splineRef = useRef(null);

    useGSAP(() => {
        if (splineRef.current) {
            gsap.to(splineRef.current, {
                opacity: 0,
                scale: 2,
                duration: 1,
                ease: "power2.inOut",
                delay: 3,
                onComplete: () => {
                    splineRef.current.style.display = "none";
                },
            });
        }
    });

    return (
        <div
            className="absolute inset-0  flex items-center justify-center overflow-hidden"
            ref={splineRef}
        >
            <Spline
                scene="https://prod.spline.design/ZuB0ol8ZOjWYdD9c/scene.splinecode"
                className="opacity-70"
            />
        </div>
    );
};

export default SplineScene;
