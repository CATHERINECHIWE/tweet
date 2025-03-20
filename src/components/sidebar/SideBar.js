import React from 'react'
import Image from 'next/image'
import styles from './sidebar.module.css'
import { fetchName } from '@/utils/fetchData'
// import { routeModule } from './next/dist/build/templates/page`

const Sidebar = () => {
  return (
<div className={`${styles.sideContainer} flex-c0l items-start justify-center gap-16 h-screen w-[15%] text-white pl-8 pt-2`}>

 
<svg viewBox="0 0 24 24" aria-hidden="true" className=" h-5 w-5"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"  style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0) saturate(7493%) hue-rotate(304deg)brightness(115%)contrast(103%)" }}>
  </path></g></svg>

   < div className='flex flex-col gap-10 h-[50vh] w-full'>
  <Image src="/side images/home.png" width={20} height={20} alt='Home Image' style={{filter: "brightness(0) saturate(100%) invert(91%) sepia(0) saturate (7493%) hue-rotate(304deg) brightness(115%) contrast(103%)"}}/>
  <h1>Home</h1>
</div>

<div> 
   <h1>Explore</h1>
</div>

<div>
  <h1>Notifications</h1>
</div>

<div>
  <h1>Massge</h1>
</div>

<div>
  <h1>Grok</h1>
</div>

<div>
  <h1>Communities</h1>
</div>

<div>
  <h1>Profile</h1>
</div>

<div>
  <h1> More</h1>
 </div>


 </div>

// </div>
  )
}

  export default Sidebar













// Bearer token => AAAAAAAAAAAAAAAAAAAAAFXUzgEAAAAABebTiAsulpffAC2Nja%2BZfuhcQU4%3DmeVWSvtCAxdtSx5wRMFQsFArsu8iCbfk6LgsRVTPMXMh4ROLJp

// access token => 1585578990596677632-rhR7TXFhd0uy9yFZhBzAVGOwSGN7iX

// access token secret => SCC5cxIjtft77NB7k5fc7LCTForP7gKxxZNFOSu7Brkg6








