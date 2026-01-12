import reactLogo from '../../assets/react.svg'
 export default function Card () {
    /*js */
    console.log(reactLogo)
    return(
        
        <div className="card">
            <img src="/vite.svg" alt="photo1" />
            <img src={reactLogo} alt="photo2" />
        <h1>hello from Card</h1>        
        </div>
    )
    
}
