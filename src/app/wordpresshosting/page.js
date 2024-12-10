
import Domain from '@/components/homepage/domainSection/Domain'
import QuestionSection from '@/components/homepage/freqaskQuestionSection/QuestionSection'
import BannerSection from '@/components/wordpresshosting/bannersection/bannersection1'
import BannerSection2 from '@/components/wordpresshosting/bannersection/bannersection2'
import BannerSection3 from '@/components/wordpresshosting/bannersection/bannersection3'
import BannerSection4 from '@/components/wordpresshosting/bannersection/bannersection4'
import BannerSection5 from '@/components/wordpresshosting/bannersection/bannersection5'
import BannerSection6 from '@/components/wordpresshosting/bannersection/bannersection6'
import React from 'react'

const page = () => {
    return (
        <>
            <BannerSection />
            <BannerSection2 />
            <BannerSection3 />
            <BannerSection4 />
            <BannerSection5 />
            <BannerSection6 />
            <Domain />
            <QuestionSection />
        </>
    )
}

export default page