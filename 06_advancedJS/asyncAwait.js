function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name:"Latif", url : "latifpala.in"});
        }, 3000)
    })
}

async function getUserData(params) {
    try {
        console.log('Fetching user data');
        const data = await fetchUserData();
        console.log("Data fetched successfully");
        console.log("User Data", data);
    } catch (error) {
        console.log("Error fetching data", error);
    }
    
}
getUserData()