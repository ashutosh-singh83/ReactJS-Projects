import styles from "./Button.module.css"

const Button = (props) => {
    console.log(props);
  return (
    <button className={props.isOutline?`${styles.outline_btn}`: `${styles.button}`}>
        {props.icon}
        {props.text}

    </button>
  )
}

export default Button
