"use client"

import { motion, Variants } from "framer-motion"

// For path drawing (text converted to paths)
const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

// For regular text animations
const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        }
    })
}

export default function AnimatedTextDemo() {
    return (
        <div className="flex flex-col items-center gap-12 p-8">
            {/* Method 1: Regular SVG text with motion animations */}
            <motion.svg
                width="600"
                height="100"
                viewBox="0 0 600 100"
                initial="hidden"
                animate="visible"
            >
                <motion.text
                    x="50%"
                    y="50"
                    textAnchor="middle"
                    fill="#2196F3"
                    fontSize="48"
                    fontWeight="bold"
                    variants={textVariants}
                    custom={0}
                >
                    Hello Animation!
                </motion.text>
            </motion.svg>

            {/* Method 2: Stroked text outline (can be drawn like paths) */}
            <motion.svg
                width="600"
                height="100"
                viewBox="0 0 600 100"
                initial="hidden"
                animate="visible"
            >
                <motion.text
                    x="50%"
                    y="60"
                    textAnchor="middle"
                    stroke="#ff0088"
                    strokeWidth="2"
                    fill="transparent"
                    fontSize="56"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    variants={draw}
                    custom={1}
                    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                >
                    LOUIE
                </motion.text>
            </motion.svg>

            {/* Method 3: Letter by letter animation */}
            <motion.div
                className="text-5xl font-bold text-[#F8F9FA]"
                initial="hidden"
                animate="visible"
            >
                {"Car & Color".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={textVariants}
                        custom={i}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            {/* Method 4: Example of text as actual path (this is a simple "L" shape) */}
            <motion.svg
                width="600"
                height="200"
                viewBox="0 0 600 200"
                initial="hidden"
                animate="visible"
            >
                {/* This is a hand-drawn "L" as an example */}
                <motion.path
                    d="M 100 50 L 100 150 L 200 150"
                    stroke="#8df0cc"
                    strokeWidth="15"
                    fill="transparent"
                    variants={draw}
                    custom={2}
                    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                />
                <text x="250" y="120" fill="#BDC3C7" fontSize="24">
                    ← Text converted to path draws smoothly
                </text>
            </motion.svg>
        </div>
    )
}
