import React from 'react'

const ServiceBlock = ({icon, name}) => {
    return (
        <div className="ServiceBlock">
            <img src={icon} alt=''/> 
            <div className="block-service">
            <h3>{name}</h3>
            </div>
        </div>
    )
}

export default ServiceBlock