import './App.css'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import HorizontalDivider from './components/Utils/Divider/HorizontalDivider'

function App() {
  return (
    <>
      <h1>Componente Navbar</h1>
      <NavBar />
      <HorizontalDivider />
      <h1>Componente Button con props</h1>
      <Button evento={() => console.log('Primary')} label='Primary' color='primary' />
      <Button evento={() => console.log('Success')} label='Success' color='success' />
      <Button evento={() => console.log('Danger')} label='Danger' color='danger' />
      <HorizontalDivider />
      <h1>Componente ItemCount</h1>
      <ItemCount />

    </>
  )
}

export default App
