import { useState, useEffect } from 'react';

export const useDate = ()=>{

    const locale = 'en';

    const [today,setDate] = useState(new Date())

    useEffect(() => {

        const timer = setInterval(() =>{
            setDate(new Date())
        }, 60*1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    const day = today.toLocaleDateString(locale, {weekday:'long'})
    const date =`${day}, ${today.getDate()}, ${today.toLocaleString(locale, {month:'long'})}\n\n`;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return {
        date,time
    }
}