import React from 'react'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import Blogs from '../../components/Blogs'
import Header2 from '../../components/Header2'

const BlogPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Blog"} />
            <Blogs />
            <Footer />
        </>
    )
}

export default BlogPage