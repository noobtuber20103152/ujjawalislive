import React from 'react'

export default function WorkComponents(props) {
    return (
        <>
            <div data-toggle="tooltip" data-placement="bottom" title={props.title} className="skillIcons  mx-3 rounded-circle border shadow-lg p-3 mb-3 bg-white rounded">
                <img style={{ width: "40px", height: "40px" }} src={props.link} alt="" />
            </div>
        </>
    )
}
