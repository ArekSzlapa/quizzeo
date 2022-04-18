const StartingScreen =(props)=>{
    function hideStart (){
        props.setStart(prev=>!prev)
    }
    return(
        <>
        <main className='App--container'>
          <h1 className='App--title'>Quizzeo!</h1>
          <button onClick={hideStart} className='App--button'>Start game!</button>
        </main>
      </>
    )
}
export default StartingScreen