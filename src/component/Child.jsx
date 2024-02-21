const Child = (props) => {
    console.log(props.children);
    return <div> child {props.children}</div>



}

export default Child;