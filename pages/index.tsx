import Link from 'next/link'
import Header from '../components/header'
import ProfileCard from '../components/profileCard'


const Home = () => {

  return (
    <div>
        <Header/>
        <h2 className="px-4 pb-4">Recommended</h2>
        <div className="relative flex items-center">
          <div id="slider" className="w-full h-full overflow-x-scroll no-scrollbar scroll whitespace-nowrap scroll-smooth">
            
          </div>
        </div>
        <h2 className="px-4 py-4">Explore</h2>
        <div className="px-[16px]">
          
        </div>
    </div>
  )
}

export default Home
