import { useRef, useLayoutEffect } from 'react';

// Check if DOM is loaded
const isBrowser = typeof window !== undefined;
 

function getScrollPosition({element, useWindow}: any) {

    if (!isBrowser) {
        return {x: 0, y: 0}
    }

    const target: HTMLElement | undefined = element ? element.current : document.body;
    const position = target ? target.getBoundingClientRect() : null;

    return useWindow
    ? {x: window.scrollX, y: window.scrollY}
    : {x: position ? position.left : 0, y: position ? position.top : 0}
}


export function useScrollPosition(effect: any, deps?: any, element?: any, useWindow?: boolean, wait?: number) {

    const position = useRef(getScrollPosition({useWindow}));

    let throttleTimeout: any = null;

    const callBack = () => {

        const currPos = getScrollPosition({ element, useWindow });
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
        throttleTimeout = null;
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait);
                }
                else {
                    callBack()
                }
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, deps);
}
