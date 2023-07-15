import Team from "../../../components/TEAM/team-details/team"
import TeamHeader from "../../../components/TEAM/header/team-header"
import "../../../styles/about.scss"
import "../../../styles/globals.css"
import Involvement from "@/components/TEAM/team-details/involvement"

export const metadata = {
  title: 'Meet the Team || Treasure Trees Expert Management Team',
  description: 'Meet our expert management',
}

const Page = () => {
  return (
    <>
        <TeamHeader/>
        <Team/>
        <Involvement/>
    </>
  )
}

export default Page