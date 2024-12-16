import React from 'react'
import  styles from '../homepage/bannersection/banner.module.scss'
import LeftBox from './CloudeLeftBox'
import RightBox from './cloudeRightBox'

const cloudeSection1 = () => {
    return (
        <>
            <section className={styles.banerSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12 ">
                            <LeftBox />
                        </div>
                        <RightBox />
                    </div>
                </div>
            </section>
        </>
    )
}

export default cloudeSection1