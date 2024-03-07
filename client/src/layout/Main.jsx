import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div>
    <navbar><Navbar /></navbar>
    <Outlet/>
    <footer>Footer</footer>
    </div>
  )
}

export default Main