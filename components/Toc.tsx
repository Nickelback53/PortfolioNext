import { getIntersectionObserver } from '../lib/observer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Toc = () => {
    const router = useRouter();
    const [currentId, setCurrentId] = useState<string>('');
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll('h2'));
        setHeadingEls(headingElements);
        headingElements.map((header) => {
            observer.observe(header);
        });
    }, [router]);

    return (
        <div className=' left-full sm:hidden  xl:block '>
            <div className='text-center xl:fixed w-25 mt-4 ml-4 pl-5 '>

                {headingEls.map((h, i) => {
                    return (
                        <div  key={i}  >
                            <a className={currentId === h.id ? 'active' : ''}  href={`#${h.id}`}>{h.textContent}</a>
                        </div>
                    )
                    }
                )}
            </div>
        </div>
    );
};



export default Toc;