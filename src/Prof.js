import React from 'react'

const Prof = (props) => {
    return (
        <div>
           <h3>{props.fullName} </h3>
            <p>{props.bio}</p>
            < img src = { props.imageUrl} width="450px" alt="profile"/>
            <p>{props.profession}</p> 
        </div>
    )
}

export default Prof
