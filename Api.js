

//get all the matches[upcoming matches]

export const getMatches=() =>{
    const url='https://api.cricapi.com/v1/currentMatches?apikey=ca3eb387-1e63-4ba7-8e98-71ca5dcff425&offset=0';

    return fetch(url)
    .then((response)=>{
        response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log("ERROR : ",error);
    });
};
