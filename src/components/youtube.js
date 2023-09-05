import React from 'react'

const Youtube = ({id}) =>{ 
    return (
        <div className="youtubewrapper">
           <iframe className="youtube"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Youtube