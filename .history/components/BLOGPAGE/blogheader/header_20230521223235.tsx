import React, { lazy, Suspense } from 'react';

// import DynamicContent from "../../../container/REUSABLES/dynamicContent"
const DynamicContent = lazy( () => import('../../../container/REUSABLES/dynamicContent'))

const BlogHeader = () => {
  return (
    <>
         <div className="h-[100%]">
            <Suspense fallback={<div>Loading ...</div>}>
                <DynamicContent 
                    img_url="/images/spratt.jpg"
                    title="Blogs & Insights"
                    description="PROVIDES HASSLE-FREE BACKYARD TRANSFORMATION"
                    link_name="blog"
                />
            </Suspense>
        </div>
    </>
  )
}

export default BlogHeader