import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import image from '../img/Group 2934.png';
import SearchBar from './SearchBar';

const Home = () => {
    const {data} = useSelector((state) => state);
    const obj = useSelector((state) => state);
    console.log(obj);

  return (
    <div>
        <SearchBar />
        <div className='home'>
            {
                data.map((item, index) => (
                    <Link to={`/detail/${item.id}`} className='link'>
                        <div key={index} className='one-card'>
                            <div className='img-div'>
                                <img src={item.imgSrc} alt={`Post ${item.id}`} />
                            </div>
                            <p className='title'>{item.title}</p>
                            <div className='body'>{item.body}</div>
                            <div className='read-more'>
                                <span>Read more</span>
                                <img src={image} alt={item.title} />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home