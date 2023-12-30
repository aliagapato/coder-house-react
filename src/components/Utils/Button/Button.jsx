const Button = (props) => {
  return <button onClick={props.evento} className={"m-2 btn btn-outline-" + props.color}> {props.label}</button>
}

export default Button