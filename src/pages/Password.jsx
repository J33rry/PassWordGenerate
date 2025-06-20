"use client";
import AnimatedSlider from "@/components/animatedSlider";
import { Generatepass } from "@/utils/pass";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { IoCopy } from "react-icons/io5";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
function Password() {
    const [password, setpassWord] = useState("Ready to Generate!!");
    const [length, setLength] = useState(6);
    const [numbers, setNumber] = useState(true);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    const isdisabled = !numbers && !uppercase && !lowercase && !symbols;
    const notGenerated = password == "Ready to Generate!!";

    const onGenerate = () => {
        setpassWord(
            Generatepass({ numbers, length, uppercase, lowercase, symbols })
        );
        console.log(password);
    };
    const handleSlider = (event, value) => {
        setLength(value);
    };
    const copyText = () => {
        setCopied(true);
        if (navigator.clipboard) {
            navigator.clipboard.writeText(password);
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = password;
            textArea.setAttribute("readonly", "");
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }
    };

    const textRef = useRef(null);
    gsap.registerPlugin(ScrambleTextPlugin);
    useGSAP(() => {
        gsap.to(textRef.current, {
            scrambleText: {
                text: password,
                chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*",
                speed: 0.5,
            },
            duration: 1,
        });
    }, [password]);

    const pass = useRef(null);
    useGSAP(() => {
        gsap.to(pass.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            delay: 0.5,
            duration: 1.5,
        });
    }, []);

    return (
        <div
            className="flex items-center justify-center flex-col mt-20 border-2 border-zinc-400 rounded-xl mx-5 rounded-bl-none rounded-tr-3xl gap-3 md:mx-8 lg:mx-12 lg:mt-30 xl:mx-14 xl:mt-40 lg:gap-4 xl:gap-6 opacity-0 scale-0"
            ref={pass}
        >
            <div className=" flex flex-col items-center justify-center gap-4 mt-4 lg:mt-8 xl:mt-12 xl:gap-8">
                <h1 className="text-md font-one tracking-wider md:text-lg lg:text-2xl xl:text-3xl">
                    Password Generator
                </h1>
                <div className="flex w-full gap-3 items-center justify-center">
                    <div className="bg-zinc-400 h-10 lg:h-12 xl:h-16 w-full rounded-xl cursor-text flex items-center justify-center">
                        <h1
                            className="font-loading text-xl text-zinc-900 lg:text-2xl"
                            ref={textRef}
                        >
                            {password}
                        </h1>
                    </div>
                    <div className="scale-150 border-2 border-zinc-400 rounded-lg rounded-bl-sm  hover:rounded-bl-none p-1 cursor-pointer hover:bg-zinc-500 transition-all hover:scale-175 lg:h-8 xl:h-10">
                        <IoCopy
                            className={`h-full w-full transition-all ${
                                copied ? "text-green-500" : ""
                            } ${
                                notGenerated
                                    ? "text-red-400 cursor-not-allowed opacity-50"
                                    : ""
                            }`}
                            onClick={copyText}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-loading lg:text-2xl">
                    Length Of Passwords : {length}
                </div>
                <AnimatedSlider value={length} onChange={handleSlider} />
            </div>
            <div className="flex flex-col gap-2 lg:text-2xl lg:gap-4">
                <div
                    className={`flex items-center gap-2 font-loading transition-all border-2 border-zinc-800 rounded-xl py-2 border-l-0 border-t-0 ${
                        !numbers ? "text-zinc-600 bg-zinc-900" : ""
                    }`}
                    onClick={() => {
                        setNumber(!numbers);
                    }}
                >
                    <input
                        type="checkbox"
                        checked={numbers}
                        onChange={() => {
                            setNumber(!numbers);
                        }}
                        className="cursor-pointer text-zinc-400 focus:ring-zinc-200 h-6 w-6 focus:text-red-500"
                    />
                    Numbers
                </div>
                <div
                    className={`flex items-center gap-2 font-loading transition-all border-2 border-zinc-800 rounded-xl py-2 border-l-0 ${
                        !uppercase ? "text-zinc-600 bg-zinc-900" : ""
                    }`}
                    onClick={() => {
                        setUppercase(!uppercase);
                    }}
                >
                    <input
                        type="checkbox"
                        checked={uppercase}
                        onChange={() => {
                            setUppercase(!uppercase);
                        }}
                        className="cursor-pointer text-zinc-400 focus:ring-zinc-200 h-6 w-6 focus:text-red-500"
                    />
                    UpperCase Letters
                </div>
                <div
                    className={`flex items-center gap-2 font-loading transition-all border-2 border-zinc-800 rounded-xl py-2 border-l-0 ${
                        !lowercase ? "text-zinc-600 bg-zinc-900" : ""
                    }`}
                    onClick={() => {
                        setLowercase(!lowercase);
                    }}
                >
                    <input
                        type="checkbox"
                        checked={lowercase}
                        onChange={() => {
                            setLowercase(!lowercase);
                        }}
                        className="cursor-pointer text-zinc-400 focus:ring-zinc-200 h-6 w-6 focus:text-red-500"
                    />
                    LowerCase Letters
                </div>
                <div
                    className={`flex items-center gap-2 font-loading transition-all border-2 border-zinc-800 rounded-xl py-2 border-l-0 border-b-0 ${
                        !symbols ? "text-zinc-600 bg-zinc-900" : ""
                    }`}
                    onClick={() => {
                        setSymbols(!symbols);
                    }}
                >
                    <input
                        type="checkbox"
                        checked={symbols}
                        onChange={() => {
                            setSymbols(!symbols);
                        }}
                        className="cursor-pointer text-zinc-400 focus:ring-zinc-200 h-6 w-6 focus:text-red-500"
                    />
                    Symbols
                </div>
            </div>
            <button
                className="my-6 bg-zinc-400 rounded-xl py-4 w-[80%] md:w-[65%] rounded-bl-none hover:bg-zinc-600 transition-all font-one disabled:opacity-50 disabled:cursor-not-allowed lg:text-2xl"
                type="button"
                onClick={onGenerate}
                disabled={isdisabled}
            >
                Generate
            </button>
            {isdisabled && (
                <div className="text-red-500 font-loading text-lg">
                    Please select at least one option to generate a password.
                </div>
            )}
        </div>
    );
}

export default Password;
