import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abordConrl = new AbortController();
        
        setTimeout(() => {
            fetch(url, {
                signal: abordConrl.signal
            })
            .then(res => 
            {
                if ( ! res.ok )
                    throw Error("could not fetch the resource");
                return res.json();
            })
            .then ((newData) => 
            {
                setData(newData);
                setPending(false);
                setError(null);
            })
            .catch(err => 
            {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setPending(false);
                }
            })
        }, 500);

        return () => { abordConrl.abort() };//clearnup function
    }, [url]);

    return {data, pending, error};
}

export default useFetch;