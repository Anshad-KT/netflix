
import './App.css'
import Banner from './components/banner/Banner'
import NavBar from './components/navbar/NavBar'
import RowPost from './components/RowPost/RowPost'
import { action,originals,trending,romance,horror } from "./urls";

function App() {
  

  return (
    <>
     <NavBar />
     <Banner url={trending} />
     <RowPost url={originals} title='Netflix Originals' isSmall />
     <RowPost url={action} title='Action'   />
     <RowPost url={horror} title='Horror'   />
     <RowPost url={romance} title='Romance'   />
     
    </>
  )
}

export default App
