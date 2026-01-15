function getPostData(){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("post data fetched");
        }, 3000)
    });
}

function getCommentData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched");
        },2000)
    })
}

/* async function getBlogData(){
    try {
        console.log("Fetching blog data");
        const blogdata = await getPostData();
        const commentdata = await getCommentData();
        console.log("Blog data fetched");
        console.log(blogdata);
        console.log(commentdata);
    } catch (error) {   
        console.error('Error fetching data');
    }
} */
async function getBlogData() {
    try {
        const [postdata, commentdata] = await Promise.all([getPostData(), getCommentData()]);
        console.log(postdata);
        console.log(commentdata);
    } catch (error) {
        console.error('Error fetching data');
    }
}
getBlogData()
