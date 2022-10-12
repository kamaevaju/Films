function Buttons({filteredMovie}){
    return(
       <div className="buttons">
        <button className="btn" onClick={() => filteredMovie('film')}>Films</button>
        <button className="btn" onClick={() => filteredMovie('series')}>TV series</button>
        <button className="btn" onClick={() => filteredMovie('animation')}>Animation</button>
       </div> 
    )
}

export default Buttons;