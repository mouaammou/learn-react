import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>404</h2>
            <Link to="/">Go Home Page</Link>
        </div>
    );
}
 
export default NotFound;