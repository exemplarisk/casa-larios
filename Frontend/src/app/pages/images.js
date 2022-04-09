import React from 'react'
import ImageGallery from '../components/ImageGallery'
import { images } from '../components/helpers/loadImages'

function Images() {


  return (
    <div>
      <div>
        <div>
          <ImageGallery images={images} />
        </div>
      </div>
    </div>
  )
}

export default Images