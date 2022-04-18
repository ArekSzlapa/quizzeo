const QuestionTitle =(props)=>{
    return(
        <h1>{props.title.replaceAll("&quot;","''").replaceAll("&#039;s","'s").replaceAll('&#039;',"'").replaceAll("&amp;", "&").replaceAll("&eacute;","é")}</h1>
    )
}

export default QuestionTitle