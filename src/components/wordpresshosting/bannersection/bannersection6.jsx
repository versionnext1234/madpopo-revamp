import React from 'react'
import styles from './wordpress.module.scss'

const Bannersection6 = () => {
    return (
        <>
            <div className='container' style={{marginTop:"50px", marginBottom:"50px"}}>
                <div className='row'>
                    <div className='col-md-12 col-xl-6'>
                        <p className={styles.headparasection6}>Seamless WordPress Website Migration at No Cost</p>
                        <p className={styles.headpara2section6}>"Hosting your WordPress site elsewhere? Let us handle the migration for you."</p>
                        <div className={styles.headiconparasection6}>
                            <div>
                                <img src="images\banner\Vector.svg" alt="" />
                            </div>
                            <div>
                                <p className={styles.headiconpara1section6}>Relax and leave it to us – submit a migration request, and we’ll handle the rest.</p>
                            </div>
                        </div>
                        <div className={styles.headiconparasection6}>
                            <div>
                                <img src="images\banner\Vector.svg" alt="" />
                            </div>
                            <div>
                                <p className={styles.headiconpara1section6}>Effortless transfer from start to finish – our migration experts will take care of everything for you.</p>
                            </div>
                        </div>
                        <div className={styles.headiconparasection6}>
                            <div>
                                <img src="images\banner\Vector.svg" alt="" />
                            </div>
                            <div>
                                <p className={styles.headiconpara1section6}>Your website migration will be completed in under 24 hours..</p>
                            </div>
                        </div>

                        {/* button */}
                        <div className={styles.headiconbutton1section6}>
                            Migrate Now
                        </div>
                    </div>
                    <div className={`col-md-12 col-xl-6 ${styles.headiconimage1section6}`}>
                        <img src="images\banner\migratewesite.png" alt="migratewesite"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannersection6