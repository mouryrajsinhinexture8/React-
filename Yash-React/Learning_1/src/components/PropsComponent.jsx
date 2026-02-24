const Propsexample = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Props example</h1>
            <h3>Hello {props.name}</h3>
            <h4>Age : {props.age}</h4>
            <h4>Role : {props.role}</h4>
        </div>
    )
}

export default Propsexample;


////////////////////// Destructuring props by using names directly.


const Propsexample1 = ({name, age, role}) => {
    return (
        <div>
            <h1>Props example with destructuring</h1>
            <h3> Hello {name}</h3>
            <h4> Age {age}</h4>
            <h4> Role {role}</h4>
        </div>
    )
}

export {Propsexample1};


/////////////////////// Destructuring Outside the function


const Propsexample2 = ({name, age, role}) => {

    return (
        <div>
            <h3> Hello, {name}</h3>
            <h4> Age {age}</h4>
            <h4> Role {role}</h4>
        </div>
    )
}

export {Propsexample2};


/////////////////////// Displaying unkown amount of props using spread operator


const Propsexample3 = ({name, age, role, ...otherProps}) => {

    return (
        <div>
            <h3> Hello {name}</h3>
            <h4> Age {age}</h4>
            <h4> Role {role}</h4>
            <hr/>
            <h5> Other Details :</h5>
            <ul>
                {Object.keys(otherProps).map(key => (
                    //We check for key!== 'id' because we don't need to display the id
                    key !== 'id' && (
                    <li key={key}>
                        <strong>{key}:</strong> {String(otherProps[key])}
                    </li>)
                ))}
            </ul>

        </div>
    )
}

export {Propsexample3}