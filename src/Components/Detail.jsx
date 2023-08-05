import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { useState} from "react";
import image from '../img/Group 2934.png';

const Detail = () => {
  const { id } = useParams();
  const {data} = useSelector((state) => state);
  const item = useSelector((state) =>
    state.data.find((item) => item.id === parseInt(id))
  );
  const [body, setBody] = useState("");
  const [userInfo, setUserInfo] = useState("");
  if(!item){
    return <p>Loading...</p>
  }
  const handleDetailClick = () => {
      setBody(item.body);
      setUserInfo("");
    }

    const handleUserInfoClick = () => {
        setUserInfo(`Post was posted by ${item.userId}`);
        setBody("");
    }

  return (
    <div className="detail">
        <h2>{`Post Number ${item.id}`}</h2>
        <div className="single-detail-box">
            <div className="one-item-detail">
                <div className="only-img">
                    <img src={item.imgSrc} alt={`Post ${item.id}`} />
                </div>
                <div className="only-text-detail">
                    <div className="all-btn">
                        <button onClick={handleDetailClick}>Detail</button>
                        <button onClick={handleUserInfoClick}>User info</button>
                    </div>
                    {
                        body &&
                        <div className="one-item-body">
                            {body}
                        </div>
                    }
                    {
                        userInfo &&
                        <div className="user-info">
                            {userInfo}
                        </div>
                    }
                </div>
            </div>
        </div>
        <h1 className="more-posts">More Posts</h1>
        <div className="more-post-area">
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
  );
};

export default Detail;
