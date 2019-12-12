//here we need to have I think just one method that they can interact with?

//this function renders the calendar. Probably doesn't need to be async but 
//just wanted to put it there
async function renderCalendar() {

}

const $root = $('#root');

$(function() { // MAIN FUNCTION
    axios({
    method: 'get',
    url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
    withCredentials: true,
    })
    .then(response =>  {
        renderTweets(response)
    }) 
});

// RENDER SITE

export async function renderTweets () {
 
    const result = await  axios({
        method: 'get',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
    })

    let tweets = `<div id = "tweets" class = "container">`; 
    tweets +=  ` <div id = "header" style = "text-align: center; padding: 30px">   
    <button type="button" class="button is-info is-rounded" id = "postForm" data-id = "postATweet" style>Tweet</button>
    </div>`
    $root.on('click', '#postForm', handlePostFormButtonPress);
    $root.on('click', '#post', handlePostButtonPress);

    for (let i = 0; i < 50; i ++) {
        let tweet = result.data[i];

        let edit = "edit" + tweet.id;
        let saveEdit = "saveEdit" + tweet.id;
        let cancelEdit = "cancelEdit" + tweet.id;
    
        let deleteID = "delete" + tweet.id;
        let retweetID = "retweet" + tweet.id;
        let likeID = "like" + tweet.id;
        let unlikeID = "unlike" + tweet.id;
        let tweetBodyID = "tweetBody"+tweet.id;
        let replyID = "reply"+ tweet.id;
        let submitReplyID = "submitReply"+tweet.id;
        let cancelReplyID = "cancelReply" + tweet.id;
        let authorID = "author"+tweet.id;
        let isLiked = tweet.isLiked;
       
        $root.on('click', '#' + edit, handleEditButtonPress);
        $root.on('click', '#' + deleteID, handleDeleteButtonPress);
        $root.on('click', '#' + likeID, handleLikeButtonPress);
        $root.on('click', '#' + unlikeID, handleUnlikeButtonPress)
        $root.on('click', '#'+ saveEdit, handleSaveButtonPress)
        $root.on('click', '#' + cancelEdit, handleCancelButtonPress);

        $root.on('click', '#' + replyID, handleReplyButtonPress);
        $root.on('click', '#' + submitReplyID, handleSubmitReplyButtonPress);
        $root.on('click', '#' + cancelReplyID, handleCancelButtonPress);
        $root.on('click', '#' + retweetID, handleRetweetButtonPress)

        let tweetText = "Like";
        if (tweet.isLiked) {
            tweetText = "Unlike";
        }

        if (result.data[i]["isMine"] == true) {
           tweets +=   
            `<section class = "card" id = ${tweet.id} data-id  = ${tweet.id}>
                <section class="section" style = "text-align: center">
                    <div class="container" >     
                        <p id = ${authorID} > ${tweet.author}  </p>
                            <div class="content" style = "background-color: white">
                            <h1 class="title is-4" id = ${tweetBodyID} >${tweet.body}</h1>
                            </div>
                        <p id = ${isLiked}> ${tweet.likeCount}  likes</p>
                        <p> Retweets: ${tweet.retweetCount}, Replies: ${tweet.replyCount} </p>
                        <button type="button" class="button is-focused" id = ${edit} data-id  = ${tweet.id} >Edit</button>
                        <button type="button" class="button is-info is-focused" id = ${deleteID}  data-id  = ${tweet.id} >Delete</button>
                        <button type="button" class="button is-focused" id = ${retweetID}  data-id  = ${tweet.id} >Retweet</button>
                        <button type="button" class="button is-info is-focused" id = ${replyID}  data-id  = ${tweet.id} >Reply</button>
                    </div>
                </section>
            </section>`
        } else {
            tweets +=  
            `<section class = "card" id = ${tweet.id} data-id  = ${tweet.id}>
                <section class="section" style = "text-align: center">
                    <div class="container">
                        <p id = ${authorID}>  ${tweet.author}</p>
                        <div class="content" style = "background-color: white">
                            <h1 class="title is-4" id =  ${tweetBodyID} >${tweet.body}</h1>
                        </div>
                        <p> ${tweet.likeCount}  likes</p>
                        <p> Retweets: ${tweet.retweetCount}, Replies: ${tweet.replyCount} </p>`
            if (tweet.isLiked) {
                tweets +=   
                `<button type="button" class="button is-info is-focused" id = ${likeID}  data-id  = ${tweet.id}>Unlike</button>
                <button type="button" class="button is-focused" id = ${retweetID}  data-id  = ${tweet.id}>Retweet</button>
                <button type="button" class="button is-info is-focused" id = ${replyID}  data-id  = ${tweet.id}>Reply</button>
                </div>
                </section>
                </section>`
            } else {
                 tweets +=   
                `<button type="button" class="button is-info is-focused" id = ${likeID}  data-id  = ${tweet.id} >Like</button>
                <button type="button" class="button is-focused" id = ${retweetID}  data-id  = ${tweet.id} >Retweet</button>
                <button type="button" class="button is-info is-focused" id = ${replyID}  data-id  = ${tweet.id} >Reply</button>
                </div>
                </section>
                </section>`
            }
        }
    }
    // console.log("Check for pass through");
    tweets += `</div>`;
    $root.append(tweets);
}

// POST BUTTON

export const handlePostButtonPress = function (event) {
    let newTweetText = document.getElementById('myTweet').value;
    makePost(newTweetText);
}

export async function makePost (body) {
    const result = axios({
        method: 'post',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
        data: {
            type: "tweet",
            body: body
        },
    }) 
    .then(response =>  {
        $root.off(); 
        $('#tweets').replaceWith(renderTweets());
    }) 
}

// EDIT BUTTON

export const handleEditButtonPress = function (event) {
    let ID = event.target.getAttribute("data-id"); 
    let space =  $(event.target).closest(".card"); 
    let tweetBodyID = "tweetBody"+ ID; 

    let saveEdit = "saveEdit"+ID;
    let cancelEdit = "cancelEdit"+ID;
    let editedTweetID  = "editedTweet"+ID;

    let body = document.getElementById(tweetBodyID).innerHTML; 

    space.replaceWith(
    `<section class = "card" id = "cardEdit" data-id  = ${ID}>
        <section class="section" style = "text-align: center">
            <div class="container">
                <div class="content" style = "background-color: white">
                <textarea class = "textarea" id = ${editedTweetID} > ${body} </textarea>
                <button type="button" class="button is-info is-focused" id = ${saveEdit}  data-id=${ID} >Save</button>
                <button type="button" class="button is-focused" id = ${cancelEdit}  data-id=${ID} >Cancel</button>
                </div>
            </div>
        </section>
    </section>`
    )
}

export const makeUpdate = function (tweetText, tweetID) {
    const result = axios({
        method: 'put',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets/'+ tweetID,
        withCredentials: true,
        data: {
            body: tweetText
        }
        })  .then(response =>  {
            const replace = axios({
                method: 'get',
                url: 'https://comp426fa19.cs.unc.edu/a09/tweets/'+ tweetID,
                withCredentials: true,
             }) . then (response2 => {
                 let editBox = document.getElementById("cardEdit"); 
                 let tweet = response2.data;
                 let edit = "edit" + tweet.id;
                 let deleteID = "delete" + tweet.id;
                 let retweetID = "retweet" + tweet.id;
                 let replyID = "reply"+ tweet.id;
             
                 let tweetBodyID = "tweetBody"+tweet.id;
                 let authorID = "author"+tweet.id;
                // console.log("Are we here");
                $(editBox).replaceWith(
                `<section class = "card" id = ${tweet.id} data-id  = ${tweet.id}>
                    <section class="section" style = "text-align: center">
                        <div class="container">   
                            <p id = ${authorID}> ${tweet.author}  </p>
                            <div class="content" style = "background-color: white">
                                <h1 class="title is-4" id = ${tweetBodyID} >${tweet.body}</h1>
                            </div>
                            <p> ${tweet.likeCount}  likes</p>
                            <p> Retweets: ${tweet.retweetCount}</p>
                            <button type="button" class="button is-focused id = ${edit} data-id  = ${tweet.id} >Edit</button>
                            <button type="button" class="button is-info is-focused" id = ${deleteID}  data-id  = ${tweet.id} >Delete</button>
                            <button type="button" class="button is-focused" id = ${retweetID}  data-id  = ${tweet.id} >Retweet</button>
                            <button type="button" class="button is-info is-focused" id = ${replyID}  data-id  = ${tweet.id} >Reply</button>
                        </div>
                    </section>
                </section>`   
                );    
            })
     }) 
}
