import cinema from'./cinema.jpg';
import {data} from './data';
import {useState} from 'react';
import Buttons from './Buttons';

function Home(){
    
        const [watch, setWatch] = useState(data);
        const [showText, setShowText] = useState(false);

        const chosenMovie = (searchTerm) =>{
            const newList = data.filter(element => element.searchTerm === searchTerm);
            setWatch(newList);
        }
        const showTextClick = (element) =>{
            element.showMore = !element.showMore;
            setShowText(!showText);
        }
      

        return (
          <div> 
              <div className='container'>
                <Buttons filteredMovie={chosenMovie} />
              </div>

              <div className='container'>
                <h1>If you don't know what to watch on Friday evening</h1>
              </div>
              <div className='container'>
                <img src={cinema} width='400px' alt='picture' className='mainpic' />
              </div>
         
            <div className='card'>
              {watch.map((element =>{
                const {title, searchTerm, year, image, info, stars, showMore} = element;
                
                return(
                  <div key={title} className='watch-card'>
                    <img className='card-image' src={image} width='280px' height='400px' alt='image' />
                      <div className='watch-info'>
                        <h2 className='title'>{title}</h2>
                        <h4 className='year'>{year}</h4>
                        <h3 className='stars'> {stars}</h3>
                        <p className='info'>{showMore ? info : info.substring(0,70) + "..."}
                          <button className='btn-show' onClick={()=> showTextClick(element)}>{showMore? "Show less" : "Show more"}</button></p>
                      </div>
                  </div>
                )
              }))}
            </div>
            <hr></hr>
            <div className='foot'>
                
                <p>Some images on this website have been taken from the Internet for educational purposes.</p>
            </div>

          </div> 
         
        );
    
}

export default Home;