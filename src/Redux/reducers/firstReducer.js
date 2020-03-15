//Default values
const defaultState = {
    //put your default values here


}


//Reducer
const firstReducer = (prevState = defaultState, action) => {
    switch(action.type){
        //cases here
        //case "NO_PAYLOAD_EXAMPLE":
            //return {...prevState, exampleValue: prevState.exampleValue + ", "}
        //case "SIMPLE_PAYLOAD_EXAMPLE": 
            //return {...prevState, exampleKey: action.payload}
        //case "NESTED_PAYLOAD_EXAMPLE":
            //return {...prevState, 
            //        exampleKey1: action.payload['payloadKey1'],
            //        exampleKey2: action.payload['payloadKey2']
            //        }
        case "PASSWORD":
            return {...prevState, password:  action.payload };
        case "USERNAME":
            return {...prevState, username:  action.payload };

        //by default return the same state
        default:
            return prevState;
    }
}

//export the reducer
export default firstReducer;