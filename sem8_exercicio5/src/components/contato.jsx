function Contato({photo,name,description}){
    return(
        <li>
            <img src={photo} width="150" height="150"/><br/>
            {name}<br/>
            {description}
        </li> 
    )
}

export default Contato