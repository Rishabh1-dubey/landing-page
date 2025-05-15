import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'
import { card } from '../assets'



const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>In few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Arcy roreir, purwrs IN sfdsiji, set ser m integer, sifhs Adsfiosf, quis alowuest eege werir, oihtwo.Asidf isfser ,etc</p>
      <Button styles="mt-10"/>   
      </div>
      {/*  ----------iamge section ------------------ */}
      <div className={layout.sectionImg}>
        <img src={card} className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal