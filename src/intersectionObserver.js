import { useEffect } from "react";
let listernerCallbacks = new WeakMap();

let observer;

const handleIntersections = (entries) => {
    entries.forEach(entry => {
        if (listernerCallbacks.has(entry.target)) {
            let cb = listernerCallbacks.get(entry.target);
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                listernerCallbacks.delete(entry.target);
                cb();
            }
        }
    })
}
const getIntersectiobObserver = () => {
    if (observer === undefined) {
        observer = new IntersectionObserver(handleIntersections, {
            rootMargin: "100px",
            threshold: "0.4"
        })
    }
    return observer;
}

const useIntersection = (elem, callback) => {
    useEffect(() => {
        let target = elem.current;
        let observer = getIntersectiobObserver();
        listernerCallbacks.set(target, callback);
        observer.observe(target);
        return () => {
            listernerCallbacks.delete(target);
            observer.unobserve(target);
        }
    }, []);
}
export default useIntersection;