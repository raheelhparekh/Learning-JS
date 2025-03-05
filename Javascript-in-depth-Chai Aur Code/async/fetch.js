// fetches a source from network
// returns a promise once response is fulfilled

const fetchPromise=fetch("https://jsonplaceholder.typicode.com/posts");
fetchPromise
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("fetch done");
}
);