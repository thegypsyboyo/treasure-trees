import DynamicContent from "@/container/REUSABLES/dynamicContent"
import urlFor from "@/lib/urlFor"
type Props = {
  post:TeamMember
}
const Teamheader = ({post}:Props) => {
  return (
    <DynamicContent
    img_url={urlFor(post.image).url()}
    title={post.name}
    link_name="team details"
    description={`Details of ${post.name}`}
    />
  )
}

export default Teamheader