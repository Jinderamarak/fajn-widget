import React, { useEffect, useState } from 'react'
import ShowIf from './ShowIf';

const BASE_URL = `${location.origin}${location.pathname}`;

function Config() {

    const [widgetUrl, setWidgetUrl] = useState("");
    const [passQuery, setPassQuery] = useState("category=1&limit=1");

    useEffect(() => {
        const updateParams = () => {

            const params = new URLSearchParams();
            params.set("pass", passQuery)

            setWidgetUrl(`${BASE_URL}?preset=fajnyc&${params.toString()}`)
        }

        const timeout = setTimeout(() => updateParams(), 1000);
        return () => clearTimeout(timeout);
    }, [passQuery])

    return (
        <section className='config'>
            <div className='values'>

                <h1>Vysledna URL:</h1>
                <input readOnly={true} value={widgetUrl} className='special' />
                <br />

                <h1>GET Parametry</h1>
                <p>Parametry predane supa api</p>
                <input value={passQuery} onChange={e => setPassQuery(e.target.value)} className="special" />
            </div>
            <div className='preview'>
                <iframe src={widgetUrl} />
            </div>
        </section>
    )
}

export default Config;