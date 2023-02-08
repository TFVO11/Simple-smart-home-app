const Button = (props) => {
    return (
        <button onclick={props.onclick}
        type={props.type || 'button'}
        >
            {props.children}
        </button>
    )
}

export default Button;