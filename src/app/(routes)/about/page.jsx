import Background from "@/components/aboutUs/Background"
import Choose from "@/components/aboutUs/choose/Choose"
import Comment from "@/components/aboutUs/Comment"
import Objectives from "@/components/aboutUs/Objectives"

export const metadata = {
    title: 'Revive Physiotherapy | About Us',
    description: 'Generated by create next app',
  }

const About = () => {
  return (
    <div className="w-full h-full px-3 py-16 mx-auto max-w-7xl sm:px-4">
      <Background />
      <Objectives />
      <Choose />
      <Comment />
    </div>
  )
}

export default About