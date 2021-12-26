import React from 'react';

function Loading() {
    return (
        <section className='loading'>
            <svg viewBox='0 0 100 100'>
                <circle
                    stroke="#020923"
                    strokeWidth="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                />
            </svg>
        </section>
    )
}

export default Loading;