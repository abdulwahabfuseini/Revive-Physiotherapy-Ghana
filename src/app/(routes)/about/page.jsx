import Background from "@/components/aboutUs/Background"
import Choose from "@/components/aboutUs/choose/Choose"
import Objectives from "@/components/aboutUs/Objectives"
import Rate from "@/components/aboutUs/Rate"

export const metadata = {
    title: 'Revive Physiotherapy | About Us',
    description: 'About Revive Physiotherapy Ghana',
  }

const About = () => {
  return (
    <div className="w-full h-full px-3 py-16 mx-auto overflow-x-hidden max-w-7xl sm:px-4">
      <Background />
      <Objectives />
      <Choose />
      <Rate />
    </div>
  )
}

export default About