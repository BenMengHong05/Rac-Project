import React from 'react'
import Content from './Content'
import Carousel from './Carousel'
import New from './New'
import News from './News'

import Collaboration from './Collaboration'
import Photo from './Photo'
import Video from './Video'
import Announcement from './Announcement'


function Main() {
  return (
    <>
     <Carousel />
     {/* <Video /> */}
     <News />
     <Announcement />
     <Photo />
     <Collaboration />
    </>
  )
}

export default Main