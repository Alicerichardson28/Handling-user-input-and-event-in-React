import React from 'react';

const ImageList = ({images}) => {
    const imagesMap = images.map( ({urls, id, description}) => {
        return <img alt={description} key={id} src={urls.regular}/>
    })

    return (
        <div>{imagesMap}</div>
    )
}

export default ImageList;