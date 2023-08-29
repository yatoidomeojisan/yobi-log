import React from "react"

const Kihan = ({ title, children }) => {
    return(
        <div className="kihan">
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default Kihan