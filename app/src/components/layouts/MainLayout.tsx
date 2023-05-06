import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const MainLayout = ({ children }) => {
  return (
    <>

    <Navbar />

    { children }

    <Footer />

    </>
  )
}

export default MainLayout