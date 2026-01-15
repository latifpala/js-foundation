function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve({status:true, name:'latif'});
            }else{
                reject({status:false, name:'not available'});
            }
        }, 1000);
    })
}
fetchData()
    .then((data) => console.log(data.status))
    .catch((error) => console.log(error.status))