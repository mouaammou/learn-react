import { useState } from 'react'
import BlogList from './blog';

const Home = () => {

    const [elements, setEelms] = useState([
        {title: 'my new website', body: 'my body is ...', author: 'mouad', id: 1},
        {title: 'my new website', body: 'my body is ...', author: 'samir', id: 2},
        {title: 'my new website', body: 'my body is ...', author: 'mouad', id: 3}
    ]);

    return (
        <div className="home">
          <BlogList elements={elements} title='App blogs title'/>
          <BlogList elements={elements.filter((ele) => { return ele.author === 'mouad'})} title='Mouad Blogs'/>
        </div>
    );
}
 
export default Home;