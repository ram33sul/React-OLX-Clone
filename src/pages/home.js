import React from 'react'
import BannerAd from '../components/banner_ad/banner_ad';
import FooterBanner from '../components/footer-banner/footer-banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Posts from '../components/posts/posts';
import RowPost from '../components/row_post/row_post';
import SubFooter from '../components/sub_footer/sub_footer';
import SubHeader from '../components/sub_header/sub_header';
function Home() {
  return (
    <div>
        <Header/>
        <SubHeader />
        <BannerAd />
        <RowPost />
        <Posts />
        <FooterBanner />
        <Footer />
        <SubFooter />
    </div>
  )
}

export default Home