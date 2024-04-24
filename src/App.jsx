 import NavBar from"./components/navbar/NavBar"
 import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
 import './App.css'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Nuestros productos!:"/>
    </div>
  )
}

export default App
