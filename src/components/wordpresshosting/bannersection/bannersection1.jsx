import React from 'react'
import LeftBox from "./leftBox";
import LinuxRight from '@/components/linuxhosting/linuxRight';
import styles from '../../../components/homepage/bannersection/banner.module.scss';

const bannersection1 = () => {
    return (
        <>
            <section className={styles.banerSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12 col-12">
                            <LeftBox/>
                        </div>
                        <LinuxRight />
                    </div>
                </div>
            </section>
        </>
    )
}
export default bannersection1;