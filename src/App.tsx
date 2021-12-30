import React from 'react'
import Loading from './components/Loading';
import Results from './pages/Results';
import useData from './utils/useData';


function App() {

    const { loading, ...data } = useData();

    if (loading) return <Loading />
    return <Results {...data} />
}

export default App;