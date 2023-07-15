import DynamicContent from "../../../container/REUSABLES/dynamicContent"
// import post from "../../../schemas/BLOG/post";

type Props = {
    posts: Post;
}

const BlogDetailsHeader = ({posts}: Props) => {
    // console.log(post)
    const blogtitle = posts.slug.current.replace(/-/g, " ");
    const words = blogtitle.split(" ");
    const firstTenWords = words.slice(0, 10).join(" ");
    const desc = posts.description.split(" ").slice(0, 10).join(" ")
    const mainImage = posts.mainImage;
    const imgUrl = mainImage?.asset?.url;
    return (
    <>
         <div className="h-[100%]">

            <DynamicContent 
                title={firstTenWords}
                img_url="/images/spratt.jpg"
                link_name="blog details"
                description={desc}
            />
        </div>
    </>
  )
}

export default BlogDetailsHeader