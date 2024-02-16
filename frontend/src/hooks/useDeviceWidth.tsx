import { useState, useEffect } from "react";




export default function useDeviceWidth() {
    const [device600px, setDevice600px] = useState(false);
    const [device1000px, setDevice1000px] = useState(false);
    const updateState = () => {
        if (window.innerWidth <= 600){
            setDevice600px(true)
            return
        } else {
            setDevice600px(false)
        }
        if (window.innerWidth >= 1000){
            setDevice1000px(true)
            return
        } else {
            setDevice1000px(false)
        }
    }
    useEffect(() => {
        const onResize = () => {
            updateState()
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return {device600px, device1000px}
}