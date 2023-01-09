export const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length > 0)
    {
        return false;
    }
    return true;
}

export const dumpLog = (message) =>{
    console.log(message)

    // send it to tool for tracking
}

// export {isArrayEmpty,dumpLog}