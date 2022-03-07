import './TagCard.css'

export default ({ tagName ,progress=20, bgColor, handleClick}) => {
    return(
        <div className="card" onClick={handleClick} >
           <header style={{background: bgColor}}>
               <h2>{tagName}</h2>
           </header>
           <div className="card-progressbar" style={{width:`${progress > 0 ? progress : 1}%`, background: bgColor}} />
           <div className="progressbar-info">
                {progress < 100 ? `${progress}%` : 'Ok'}
           </div>
        </div>
    )
}