import React from 'react'
import Footer from '../../components/Footer'
import PageMainBanner from '../../components/AboutBanner'
import BlogDetails from '../../components/BlogDetails'
import Header2 from '../../components/Header2'

const BlogDetailsPage = () => {
    return (
        <>
            <Header2 />
            <PageMainBanner title={"Blog Single"} />\
            <BlogDetails />
            <Footer />
        </>
    )
}

export default BlogDetailsPage