import React from 'react';

export type TMenuInput = {
    type: "menu",
    value: string,
    options: string[]
}

interface IMenuInput {
    name: string;
    value: string;
    options: string[]
    change: (v: string) => void;
    remove: () => void;
}

function MenuInput({ name, value, options, change, remove }: IMenuInput) {
    return (
        <p className='param'>
            <span className='base name'>{name}</span>
            <select
                value={value}
                onChange={(e) => change(e.target.value)}
            >
                {
                    options.map(o => (
                        <option key={o}>{o}</option>
                    ))
                }
            </select>
            <a className='base hoverable after' target="_blank" href={`https://github.com/Jinderamarak/fajn-widget#${name}`}>?</a>
            <button className='base hoverable after' onClick={remove}>X</button>
        </p>
    )
}

export default MenuInput;