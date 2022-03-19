import {Link} from 'react-router-dom';

function HelloWorld() {
    return (
        <>
            <h1>Hello World</h1>
            <Link to="/">Labs</Link>
            <br/>
            <Link to="tuiter">Tuiter</Link>
        </>

    );
}

export default HelloWorld;