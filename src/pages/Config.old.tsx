import React, { useEffect, useState } from 'react'
import ShowIf from '../components/ShowIf';


function Config() {

    const [builtParams, setBuiltParams] = useState("");

    const [environment, setEnvironment] = useState("dev");
    const [url, setUrl] = useState("");
    const [testRows, setTestRows] = useState(3);
    const [back, setBack] = useState("#020923");
    const [front, setFront] = useState("#DEDFE2");
    const [accent, setAccent] = useState("#1C233D");
    const [scale, setScale] = useState(1);
    const [pullInterval, setPullInterval] = useState(500);
    const [showTotal, setShowTotal] = useState(true)
    const [showForEntry, setShowForEntry] = useState(true)
    const [useEntryPercentage, setUseEntryPercentage] = useState(true)
    const [barRelativeTop, setBarRelativeTop] = useState(true)

    const [category, setCategory] = useState("");
    const [query, setQuery] = useState("");

    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const updateParams = () => {
            const params = new URLSearchParams();

            switch (environment) {
                case "widget": {
                    params.set("widget", "yep")
                    if (url.length > 0) params.set("url", url)
                    break;
                }
                case "dimensions": {
                    params.set("dimensions", "yep")
                    params.set("testRows", `${testRows}`)
                    break;
                }
                default: {
                    params.set("dev", "yep")
                    break;
                }
            }

            params.set("back", back);
            params.set("front", front);
            params.set("accent", accent);
            params.set("scale", `${scale}`);
            params.set("pullInterval", `${pullInterval}`);
            if (showTotal) params.set("showTotal", "yep");
            if (showForEntry) params.set("showForEntry", "yep");
            if (useEntryPercentage) params.set("useEntryPercentage", "yep");
            if (barRelativeTop) params.set("barRelativeTop", "yep");

            setBuiltParams(`${location.origin}${location.pathname}?${params.toString()}`)

        }

        const timeout = setTimeout(() => updateParams(), 1000);
        return () => clearTimeout(timeout);
    }, [environment, url, testRows, back, front, accent, scale, pullInterval, showTotal, showForEntry, useEntryPercentage, barRelativeTop])

    return (
        <section className='config'>
            <div className='values'>

                <h1>Vysledna URL:</h1>
                <input readOnly={true} value={builtParams} className='special' />

                <br /><br /><br />

                <h1>Environment</h1>
                <p>Zdroj dat, Widget nefunkci diky CORS</p>
                <p>
                    <br />
                    <input type="radio" name='environment' id="env-widget" readOnly checked={environment === "widget"} onClick={() => setEnvironment("widget")} />
                    <label htmlFor="env-widget">{`<X `} Widget</label>
                    <br />
                    <input type="radio" name='environment' id="env-dimensions" readOnly checked={environment === "dimensions"} onClick={() => setEnvironment("dimensions")} />
                    <label htmlFor="env-dimensions">{`<- `} Test Rozmeru</label>
                    <br />
                    <input type="radio" name='environment' id="env-dev" readOnly checked={environment === "dev"} onClick={() => setEnvironment("dev")} />
                    <label htmlFor="env-dev">{`<- `} Development</label>
                    <br />
                </p>

                {
                    environment === "widget" ? (
                        <>
                            {/*}
                            <h1>Production URL</h1>
                            <p>URL pouzita pro ziskani dat pro env=widget</p>
                            <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                            {*/}
                            <h1>Parametry URL</h1>
                            <p>URL pouzita pro ziskani dat pro env=widget</p>
                            <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                        </>
                    ) : (environment === "dimensions" ? (
                        <>
                            <h1>Test Rows</h1>
                            <p>Pocet radku pri pouziti env=dimensions</p>
                            <input type="number" value={testRows} onChange={e => setTestRows(parseInt(e.target.value))} />
                        </>
                    ) : undefined)
                }

                <h1>Scale</h1>
                <p>Velikost vseho</p>
                <input type="number" value={scale} onChange={e => setScale(parseFloat(e.target.value))} />

                <h1>Barvicky</h1>
                <input type="color" value={back} onChange={e => setBack(e.target.value)} />
                <input type="color" value={front} onChange={e => setFront(e.target.value)} />
                <input type="color" value={accent} onChange={e => setAccent(e.target.value)} />

                <p>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => setShowMore(v => !v)}>Vice</button>
                    <br />
                    <br />
                    <br />
                </p>

                <ShowIf ifp={showMore}>
                    <h1>Pull interval</h1>
                    <p>Interval ziskavani novych dat v milisekundach</p>
                    <input type="number" value={pullInterval} onChange={e => setPullInterval(parseInt(e.target.value))} />

                    <h1>Total votes</h1>
                    <p>Zobrazovat celkovy pocet hlasu</p>
                    <input type="checkbox" checked={showTotal} onChange={e => setShowTotal(e.target.checked)} />

                    <h1>Votes per entry</h1>
                    <p>Zobrazovat hlasy u kazde hry</p>
                    <input type="checkbox" checked={showForEntry} onChange={e => setShowForEntry(e.target.checked)} />

                    <h1>Votes percentage</h1>
                    <p>Zobrazovat procenta ze vsech hlasu misto poctu hlasu</p>
                    <input type="checkbox" checked={useEntryPercentage} onChange={e => setUseEntryPercentage(e.target.checked)} />

                    <h1>Vote bar relative</h1>
                    <p>Zobrazovat naplneni pruhu relativne k nejvetsimu poctu hlasu misto ke vsem hlasum</p>
                    <input type="checkbox" checked={barRelativeTop} onChange={e => setBarRelativeTop(e.target.checked)} />

                </ShowIf>
            </div>
            <div className='preview'>
                <iframe src={builtParams} />
            </div>
        </section>
    )
}

export default Config;