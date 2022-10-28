import { useEffect, useState } from "react";
import Animation from "./Animation"

export default function Hero() {

    const [intro, setIntro] = useState('');

    
    
    
    useEffect(() => {
        let ms: string = '끊임없이 새로운 걸 공부하는 개발자입니다';
        const timeout = setTimeout(() => {
            setIntro(ms.slice(0, intro.length + 1));
        }, 150)

        return () => { clearTimeout(timeout) }
    }, [intro])

    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-2 md:mb-0 items-center text-center">
                    <div className="wrapper">
                        <h1><div className='blinking-cursor text-3xl'>{intro}</div></h1>
                    </div>
                {/* <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div> */}
            </div>
        </>
    )
}