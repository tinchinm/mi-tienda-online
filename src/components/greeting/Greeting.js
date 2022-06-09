import './Greeting.css'

const Greeting = (props) => {
    return(
        <div className='greeting'>
            <h1>
                {props.saludo}
            </h1>
        </div>
    )
};

export default Greeting;