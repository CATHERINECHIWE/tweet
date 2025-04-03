const BASE_URL='https://twitter241.p.rapidapi.com'


// ftech data from RapidAPI
 export const fetchData = async(params) => {
    const result = await fetch(`${BASE_URL}/search?type=Top&count=20&query=${params}` ,{
           method:'GET',
           headers: {
            'x-rapidapi-key': '58144df250msh9cab9c9637b2713p1757e5jsn57eac6d03362',
		     'x-rapidapi-host': 'twitter241.p.rapidapi.com.'
            
           }         
    })
    console.log(result); 
    // it is a promise 
    const data = await result.json();
    console.log(data)
    // convert the promise to Json object
    return data
     
}

// export default fetchData;
 export const fetchName = async () => {
    const result = await fetch (`https://fakestoreapi.com/products`, {
        method: 'GET'
    })
    
    const data = await result.json();
    console.log(data)   
    return data;
    
}

export const fetchTweets = async () => {
    const result = await fetch(`${BASE_URL}/retweets?pid=15527352480026411010&count=40`, {
        method:'GET',
        headers: {
            'x-rapidapi-key': '58144df250msh9cab9c9637b2713p1757e5jsn57eac6d03362',
            'x-rapidapi-host': 'twitter241.p.rapidapi.com.'
            
        }
    })
    console.log(result);

    const data = await result.json();         
    console.log(data)
    return data;
}
