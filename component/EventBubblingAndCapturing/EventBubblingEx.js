function divtag(){
    console.log("Div tag called")
}

function buttontag(event){
    console.log("button tag called")
    event.stopPropagation()
}