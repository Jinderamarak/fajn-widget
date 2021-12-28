import React from 'react'
import Loading from './components/Loading';
import Results from './pages/Results';
import useData from './utils/useData';


function App() {

    const { loading, entries, totalVotes, topVotes } = useData();

    if (loading) return <Loading />
    return <Results entries={entries} totalVotes={totalVotes} topVotes={topVotes} />
}

export default App;