import image from './cinema.jpg';

function About(){
    return(
     <div>
        <div className="container">
            <h1>About us</h1>
        </div>
        <div className="container">
            <h2>We are working on this page...</h2>   
        </div>
        <div className="container">
            <h3>Please visit us later!</h3>
        </div>
        <div className="container">
            <img src={image} width='400px' alt='picture' className='mainpic'  />
        </div>
     </div>
        
    )
}

export default About;