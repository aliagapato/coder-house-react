import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={classes.nuevaFuente}>
      <h1>E-Commerce</h1>
      <section>
        <button className='btn btn-outline-primary m-2'>Inicio</button>
        <button className='btn btn-outline-success m-2'>Productos</button>
        <button className='btn btn-outline-danger m-2'>Login </button>
      </section>
    </nav>
  )
}

export default NavBar