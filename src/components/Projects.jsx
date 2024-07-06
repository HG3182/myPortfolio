import React, { useState } from 'react';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('Hardware');

    const tabs = ['Hardware', 'Web / Software'];

    return (
        <div>
            <section>
                <div className="container px-6 py-10 mx-auto">
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-yellow-400 sm:text-4xl lg:text-5xl pb-10">Projects</h2>

                    <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                                    activeTab === tab
                                        ? 'text-yellow-600 bg-transparent border-b-2 border-yellow-500 dark:border-yellow-400 dark:text-yellow-300'
                                        : 'text-gray-700 bg-transparent border-b-2 border-gray-200 dark:text-white dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400'
                                } sm:text-base whitespace-nowrap focus:outline-none`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <section className="mt-8 space-y-8 lg:mt-12">
                        {activeTab === 'Hardware' && (
                            <div>
                                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/smartLock.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Smart Lock System</h2>
                                            <a href="https://www.tinkercad.com/things/7VO7dTHBw5K-smart-lock-system" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>

                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/smartDoor.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Smart Door Using PIR Sensor</h2>
                                            <a href="https://www.tinkercad.com/things/eaQZfJngy1F-smart-door-using-pir-sensor" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>

                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/motionDetection.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Motion Detector</h2>
                                            <a href="https://www.tinkercad.com/things/beB3dMblwDF-motion-detector" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Web / Software' && (
                            <div>
                                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/calculator.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Calculator</h2>
                                            <a href="https://github.com/HG3182/Calculator?tab=readme-ov-file" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>

                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/noGussingGame.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Number Guessing Game</h2>
                                            <a href="https://github.com/HG3182/Number_Guessing_Game?tab=readme-ov-file" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>

                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/qrCode.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">QR Code Generator</h2>
                                            <a href="https://github.com/HG3182/QR-Code-Generator?tab=readme-ov-file" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>

                                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(/img/RPS.png)`}}>
                                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Rock Paper Scissors</h2>
                                            <a href="https://github.com/HG3182/Rock-Paper-Scissors?tab=readme-ov-file" className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Check Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </section>
        </div>
    );
}