import './home.scss'
import Slider from '../../components/slider/Slider'
import Features from '../../components/features/Features'
import About from '../../components/about/About'
import Menu from '../../components/menu/Menu'

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Features/>
      <About/>
      <Menu/>
    </div>
  )
}

export default Home