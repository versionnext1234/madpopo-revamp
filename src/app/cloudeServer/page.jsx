import React from 'react'
import CloudeSection1 from '../../components/cloudeServer/cloudeSection1'
import OrganizerSection from '@/components/homepage/organizersection/OrganizerSection'
import CloudeSection2 from '../../components/cloudeServer/cloudeSection2'
import CloudeSection3 from '../../components/cloudeServer/cloudeSection3'
import BannerSection5 from '@/components/wordpresshosting/bannersection/bannersection5';
import CloudeSection4 from '../../components/cloudeServer/cloudeSection4'
import Domain from '@/components/homepage/domainSection/Domain'
import QuestionSection from '@/components/homepage/freqaskQuestionSection/QuestionSection'

const Page = () => {
  return (
    <>
      <CloudeSection1 />
      <OrganizerSection />
      <CloudeSection2/>
      <CloudeSection3/>
      <BannerSection5/>
      <CloudeSection4/>
      <Domain/>
      <QuestionSection/>
    </>
  )
}
export default Page