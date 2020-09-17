import React from 'react'

export default function title({title,className}) {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <div/>
        </div>
    )
}
