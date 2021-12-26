import React from 'react'
import Loading from './Loading';
import Results from './Results';
import useData from './useData';


function App() {

    const { loading, entries, totalVotes, topVotes } = useData();

    if (loading) return <Loading />
    return <Results entries={entries} totalVotes={totalVotes} topVotes={topVotes} />
}

export default App;