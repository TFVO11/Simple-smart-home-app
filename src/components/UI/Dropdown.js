


const dropDown = props => {
    return (
        <article>
            {props.dropDownVisibility && props.children}
        </article>
    )
}

export default dropDown;