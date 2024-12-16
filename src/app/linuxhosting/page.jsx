import OrganizerSection from '@/components/homepage/organizersection/OrganizerSection';
import LinuxSection1 from '@/components/linuxhosting/linuxSection1';
import LinuxSection2 from '@/components/linuxhosting/linuxSection2';
import LinuxSection3 from '@/components/linuxhosting/linuxSection3';
import BannerSection5 from '@/components/wordpresshosting/bannersection/bannersection5';
import BannerSection6 from '@/components/linuxhosting/linuxSection4';
import React from 'react'
import Domain from '@/components/homepage/domainSection/Domain';
import QuestionSection from '@/components/homepage/freqaskQuestionSection/QuestionSection';

const Page = () => {
    return (
        <>
            <LinuxSection1/>
            <OrganizerSection/>
            <LinuxSection2/>
            <LinuxSection3/> 
            <BannerSection5/>
            <BannerSection6/>
            <Domain/>
            <QuestionSection/>
        </>
    )
}
export default Page;