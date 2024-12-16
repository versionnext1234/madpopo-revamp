import React from 'react'
import LinuxLeft from './linuxLeft'
import  styles from '../../components/homepage/bannersection/banner.module.scss'

import RightBox from './linuxRight'

const LinuxSection1 = () => {
    return (
        <section className={styles.banerSection}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 col-12">
              <LinuxLeft/>
            </div>
            <RightBox/>
          </div>
        </div>
      </section>
    )
}

export default LinuxSection1