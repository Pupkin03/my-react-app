import PropTypes from 'prop-types'; // ES6

const Greetings = ({name, occupation, alert}) => {

    console.log(name);
    return(
        <div>
         My name is {name}, i am an {occupation}
         <button onClick={()=>alert(name)}>click to alert</button>
         
        </div>
    )

}


Greetings.propTypes ={ 
 name : PropTypes.string,
 occupation : PropTypes.string,
 alert : PropTypes.func,
}



export default Greetings;