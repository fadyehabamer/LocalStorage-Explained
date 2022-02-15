// * Session storage Example .. have the same methods as Local Storage 
sessionStorage.setItem('HI',1243)


// * Store json and check items

/*
    * Storing Json Object
    *   Json.Stringify 
    *   Json.Parse
    
    * Check for items
    *   length()
*/

const fady = {
    name:'FADY',
    age : 21,
    PL : 'JS'
}

localStorage.setItem('me' , JSON.stringify(fady))