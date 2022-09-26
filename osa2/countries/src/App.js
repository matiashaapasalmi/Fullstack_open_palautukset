import { useState } from 'react'




const App = (props) => {

  const data = useState(props.data)
  const Countries = data[0]
  
  
  console.log(Countries)
  console.log(Countries[0].name.common)
  console.log(Countries.length)

  const [name, setname] = useState()
  const [current, setcurrent] = useState()

  const handleChange = (event) => {
    console.log(event.target.value)
    setname(event.target.value)
    
    for (let i = 0; i < Countries.length; i++) {
      if(event.target.value === Countries[i].name.common){
        console.log(i)
        setcurrent(Countries[i])
      }
    
  }
  
  
}

    const write = (current) =>{
      if(typeof current == 'undefined'){
        return <div></div>
      }
      else{
        const url = current.flags.png
        return(

          <div>
            <br /> 
            <div>
            Name:  {current.name.official}
            </div>
            <div> 
              Region: {current.region}
            </div>
            <div>
            Population: {current.population}
            </div>
            <div>
              Capital: {current.capital[0]}
            </div>
            <div>
            <img
              src={url}
              alt='flag'
            />
            </div>
            
          </div>
          

        ) 
  
      }
    }
    

 
  

  return (
    <div>
    <form>
      find countries 
      <input value={name}
      onChange={handleChange}></input>
    </form>
    <div>
    {write(current)}
    </div>
    
    </div>
  )
}


export default App