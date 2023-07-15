import Team from "../../../components/TEAM/team-details/team"
import TeamHeader from "../../../components/TEAM/header/team-header"
import "../../../styles/about.scss"
import "../../../styles/globals.css"
import Involvement from "@/components/TEAM/team-details/involvement"
import BlogIsights from "@/components/TEAM/team-details/blog"
import Blog from "@/components/HOME/blog/blog"
export const metadata = {
  title: 'Meet the Team || Treasure Trees Expert Management Team',
  description: 'Meet our expert management',
}
type  Props = {
  posts: Post[];
}
const Page = ({posts}:Props) => {
  
  return (
    <>
        <TeamHeader/>
        <Team/>
        <Involvement/>
        <Blog posts={posts}/>
        {/* <BlogIsights/> */}
    </>
  )
}

export default Page