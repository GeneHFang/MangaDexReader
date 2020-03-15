//Follow this format for your actions:

/*
export const noPayloadExample = (optionalArgs) => {
    return {
        type: "NO_PAYLOAD_EXAMPLE"
    }
}

export const simplePayloadExample = (optionalArgs) => {
    return {
        type: "SIMPLE_PAYLOAD_EXAMPLE",
        payload: optionalArgs.value1
    }
}

export const nestedPayloadExample = (optionalArgs) => {
    return {
        type: "NESTED_PAYLOAD_EXAMPLE",
        payload: {
            payloadKey1: optionalArgs.value1,
            payloadKey2: "this is an arbitrary string",
            //etc
        }
    }
}
*/
export const username = (username) => {
    console.log(username)
    return {
        type: "USERNAME",
        payload: username
    };
}

export const password = (password) => {
    return {
        type: "PASSWORD",
        payload: password
    };
}