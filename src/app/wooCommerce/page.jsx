import React from 'react'
import Section1 from '../../components/wooCommerce/wooSection1'
import BannerSection2 from '../../components/wordpresshosting/bannersection/bannersection2';
import BannerSection3 from '../../components/wooCommerce/wooSection3';
import BannerSection4 from '../../components/wooCommerce/wooSection4';
import Bannersection5 from '../../components/wordpresshosting/bannersection/bannersection5';
import Bannersection6 from '../../components/wordpresshosting/bannersection/bannersection6';

import Domain from '@/components/homepage/domainSection/Domain'
import QuestionSection from '@/components/homepage/freqaskQuestionSection/QuestionSection'
import { wooCommerceData } from '@/mockdata/accordionMockdata';

const page = () => {
  return (
     <>
       <Section1/>
       <BannerSection2/>
       <BannerSection3/>
       <BannerSection4/>
       <Bannersection5/>
       <Bannersection6/>
       <Domain/>
       <QuestionSection data={wooCommerceData}/>  
     </>
  )
}
export default page;