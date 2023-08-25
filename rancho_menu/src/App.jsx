import './App.css'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import picture from './assets/pexels-prakhar-bansal-732199.jpg'


function App() {

  return (
    <div className='init-card'>
      <img src={picture} alt="Presentation Img" />
      <div className='header-menu'>
        <h1>Oferta</h1>
      </div>
      <Menu />
      <Footer />
    </div>
  )
}

export default App
