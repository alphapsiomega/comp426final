//import { rootCertificates } from "tls";

//This will have the stuff that is.. the app. This will be the most complicated and we're probably
//gonna have to reference the render file for a09 or something

const $root = $('#root');

/*
let jwt = localStorage.getItem('jwt');
console.log(jwt);
let decode = parseJwt(jwt);
*/

//let jwt = localStorage.getItem('jwt')
//console.log("jwt is " + jwt);

//this is to render the whole page. It will call the list render in it, which will call the 
//membercard render, etc etc
export async function renderPage() {

    /*
    let appBox = `
        <div class="container has-text-centered is-connect-box" id="appBox">
            <div id="replace">
            <button type="button" class="button is-warning is-center" id="open">Welcome to Alpha Psi Omega Connect</button>
            </div>
        </div>
    
    `;
    */

    //$root.on('click', "#open", handleWelcomeButtonPress);
    

    let r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>

            <form>
            
            <div class="field">
                            <div class="control" style="padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
                </div>
                <div style="padding-bottom: 20px">
                <select>
                <option value="any">Anything</option>
                <option value="actors">Acting</option>
                <option value="directors">Directing</option>
                <option value="producers">Producing</option>
                <option value="costumes">Costuming</option>
                <option value="props">Props</option>
                <option value="set">Set</option>
                <option value="makeup">Make-Up</option>
                <option value="lighting">Lighting</option>
                <option value="sound">Sound</option>
                <option value="dramaturg">Dramaturg</option>
                <option value="writing">Writing</option>
                <option value="executive">Executive</option>
                <option value="stagehand">Stagehand</option>
                <option value="general">General</option>
            </select>
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="submit">Search</button>
            </div>
            <div class="columns">
            <div class="column is-selected-left">
                Users
            </div>
            <div class="column" style="color: #003365" id="posts">
                Posts
            </div>
            </div>
            </form>
            
        </div>
        </div>
        
    `;

    for(let i=0; i<50; i++){
        //alert("good lord");

        if(i%2==0){
        r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    <b>Twig Man</b></br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    <b>Director</b></br>
                    Experienced
                </div>
                <div class="column">
                    <b>Actor</b></br>
                    Interested
                </div>
                <div class="column">
                    <b>Producer</b></br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-warning" id="request">Request</button>
                </div>
            </div>
            </div>
            `;
        }
        else {

            r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    Twig Man</br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    Director</br>
                    Experienced
                </div>
                <div class="column">
                    Actor</br>
                    Interested
                </div>
                <div class="column">
                    Producer</br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-danger" id="unavailable">Unavailable</button>
                </div>
            </div>
            </div>
            `;  

        }
    }
    r+=`</div>`

    $root.on('click', "#postBox", handlePostBoxClick);
    $root.on('click', "#request", handleRequestButtonPress);
    $root.on('click', "#posts", handlePostsTabClick);

    $root.append(r);

}

export async function handlePostBoxClick(event) {

    // event.preventDefault();
    let r = `<div id="textype">
    <textarea class="postText" id="textToPost"></textarea>
    </div>
    <button type="submit" class="button is-black" id="postbutton">Post</button>`
    

    $('#postBox').replaceWith(r);
    $root.on('click', "#postbutton", handlePostButtonPress)

}

export async function handlePostButtonPress(event) {

    event.preventDefault();

    let textContent = document.getElementById('textToPost').value;

    let jwt = localStorage.getItem('jwt');
    console.log(jwt);
    let decode = parseJwt(jwt);

    console.log(decode.data.fname);
    
    try {
    
    const response = await axios({
        method: 'POST',
        url: "http://localhost:3000/public/posts/"+jwt+textContent,
        data: {
            data: {
                "type": "post",
                "body": textContent,
                "first": decode.data.fname,
                "last": decode.data.lname
            }
          
        },
      });
    }
    catch(error) {
        alert(error);
    }

    //handleWelcomeButtonPress(event);

      

      /*

     let r = axios.post('http://localhost:3000/public/', {
        
        data: {
            fname: textContent,
            lname: "renis",
         
        }
    });
    */

}


export async function renderUserList (event) {
    // event.preventDefault();
    /*

    axios({
        method: 'get',
        url: 'http://localhost:3000/public/users',

        })
    
    
        .then(response =>  {
            // console.log(response.data)
            // console.log(response.data[1].body);
          
                console.log(response.data.result);
                for (var key in response.data.result) {
                    if (response.data.result.hasOwnProperty(key)) {
                        console.log(response.data.result[key].data.fname);
                    }
    
            
        }}
    
       
         ) .catch(error => console.log(error))
        */

}

export async function handleWelcomeButtonPress(event) {

//   console.log("Welcome, " + decode.data.fname);

    
    

    let r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>

            <form>
            
            <div class="field">
                            <div class="control" style="padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
                </div>
                <div style="padding-bottom: 20px">
                <select>
                <option value="any">Anything</option>
                <option value="actors">Acting</option>
                <option value="directors">Directing</option>
                <option value="producers">Producing</option>
                <option value="costumes">Costuming</option>
                <option value="props">Props</option>
                <option value="set">Set</option>
                <option value="makeup">Make-Up</option>
                <option value="lighting">Lighting</option>
                <option value="sound">Sound</option>
                <option value="dramaturg">Dramaturg</option>
                <option value="writing">Writing</option>
                <option value="executive">Executive</option>
                <option value="stagehand">Stagehand</option>
                <option value="general">General</option>
            </select>
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="submit">Search</button>
            </div>
            <div class="columns">
            <div class="column is-selected-left">
                Users
            </div>
            <div class="column" style="color: #003365" id="posts">
                Posts
            </div>
            </div>
            </form>
            
        </div>
        </div>
        
    `;

    for(let i=0; i<50; i++){
        //alert("good lord");

        if(i%2==0){
        r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    <b>Twig Man</b></br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    <b>Director</b></br>
                    Experienced
                </div>
                <div class="column">
                    <b>Actor</b></br>
                    Interested
                </div>
                <div class="column">
                    <b>Producer</b></br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-warning" id="request">Request</button>
                </div>
            </div>
            </div>
            `;
        }
        else {

            r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    Twig Man</br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    Director</br>
                    Experienced
                </div>
                <div class="column">
                    Actor</br>
                    Interested
                </div>
                <div class="column">
                    Producer</br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-danger" id="unavailable">Unavailable</button>
                </div>
            </div>
            </div>
            `;  

        }
    }
    r+=`</div>`

    $root.on('click', "#postBox", handlePostBoxClick);
    $root.on('click', "#request", handleRequestButtonPress);
    $root.on('click', "#posts", handlePostsTabClick);

    $('#appBox').replaceWith(r);
}

export async function handlePostsTabClick(event) {
    event.preventDefault();

    let content = event.target.getAttribute("id");

    let r;

    if(content=="posts") {
    r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>

            <form>
            
            <div class="field">
                            <div class="control" style="padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
                </div>
                <div style="padding-bottom: 20px">
                <select>
                <option value="any">Anything</option>
                <option value="actors">Acting</option>
                <option value="directors">Directing</option>
                <option value="producers">Producing</option>
                <option value="costumes">Costuming</option>
                <option value="props">Props</option>
                <option value="set">Set</option>
                <option value="makeup">Make-Up</option>
                <option value="lighting">Lighting</option>
                <option value="sound">Sound</option>
                <option value="dramaturg">Dramaturg</option>
                <option value="writing">Writing</option>
                <option value="executive">Executive</option>
                <option value="stagehand">Stagehand</option>
                <option value="general">General</option>
            </select>
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="submit">Search</button>
            </div>
            <div class="columns">
            <div class="column" style="color: #003365" id="users">
                Users
            </div>
            <div class="column is-selected-right">
                Posts
            </div>
            </div>
            </form>
            
        </div>
        </div>
        
    `;
    
        const response = await axios({
            method: 'GET',
            url: "http://localhost:3000/public/posts",
          });
        

    console.log(response.data.result);
    

    let count=0;
    
    let order=[];

    for(var key in response.data.result) {
        
        if(response.data.result.hasOwnProperty(key)) {
              
                    //console.log(response.data.result[key].body);
    
                        console.log(key);
                        order[count]=`
                        <div class="is-profile-card">
                        <div class="columns">
                            <div class="column">
                                    <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                            </div>
                            <div class="column">
                                <b>${response.data.result[key].first} ${response.data.result[key].last}</b></br>
                                <span style:"color: #F8DA17">Senior</span>
                            </div>
                            <div class="column">
                                ${response.data.result[key].body}
                            </div>
                            <div class="column">
                                <button type="button" class="button is-warning" id="request">Request</button>
                            </div>
                        </div>
                        </div>
                        `;

                    console.log(count);
                    count++;
            
            
        }
    }

    for(let i=order.length-1; i>=0; i--) {

        r+=order[i];

    }

/*
    for(let i=0; i<100; i++){
        //alert("good lord");
        r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    <b>Twig Man</b></br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    ${response.data.result.body}
                </div>
                <div class="column">
                    <button type="button" class="button is-warning" id="request">Request</button>
                </div>
            </div>
            </div>
            `;
    }
    */

}
else {

    r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>

            <form>
            
            <div class="field">
                            <div class="control" style="padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
                </div>
                <div style="padding-bottom: 20px">
                <select>
                <option value="any">Anything</option>
                <option value="actors">Acting</option>
                <option value="directors">Directing</option>
                <option value="producers">Producing</option>
                <option value="costumes">Costuming</option>
                <option value="props">Props</option>
                <option value="set">Set</option>
                <option value="makeup">Make-Up</option>
                <option value="lighting">Lighting</option>
                <option value="sound">Sound</option>
                <option value="dramaturg">Dramaturg</option>
                <option value="writing">Writing</option>
                <option value="executive">Executive</option>
                <option value="stagehand">Stagehand</option>
                <option value="general">General</option>
            </select>
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="submit">Search</button>
            </div>
            <div class="columns">
            <div class="column is-selected-left">
                Users
            </div>
            <div class="column" style="color: #003365" id="posts">
                Posts
            </div>
            </div>
            </form>
            
        </div>
        </div>
        
    `;




    for(let i=0; i<50; i++){
        //alert("good lord");
        // we need a way to access the names
        // axios call

        if(i%2==0){
        r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    <b>Twig Man</b></br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    <b>Director</b></br>
                    Experienced
                </div>
                <div class="column">
                    <b>Actor</b></br>
                    Interested
                </div>
                <div class="column">
                    <b>Producer</b></br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-warning" id="request">Request</button>
                </div>
            </div>
            </div>
            `;
        }
        else {
// stuff
            r+=`
            <div class="is-profile-card">
            <div class="columns">
                <div class="column">
                        <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                </div>
                <div class="column">
                    Twig Man</br>
                    <span style:"color: #F8DA17">Senior</span>
                </div>
                <div class="column">
                    Director</br>
                    Experienced
                </div>
                <div class="column">
                    Actor</br>
                    Interested
                </div>
                <div class="column">
                    Producer</br>
                    Competent
                </div>
                <div class="column">
                    <button type="button" class="button is-danger" id="unavailable">Unavailable</button>
                </div>
            </div>
            </div>
            `;  

        }
    }
    
}

    r+=`</div>`;

    $('#appBox').replaceWith(r);
    $(document).off();
    $root.on('click', "#users", handlePostsTabClick);


}

export async function handleRequestButtonPress(event) {


    //alert("anything");
    event.preventDefault();
    let content = event.target.getAttribute("id");
    
    if(content=="request") {

        let r = `
        <button type="button" class="button is-success" id="unrequest">Requested!</button>
        `

        $('#request').replaceWith(r);

    }

}
//render search bar ??
function renderSearchBar() {
}
//this will render the list of profiles/people in the theatre community
function renderList() {
}
//represents the section that holds each member's primary skills/experience/interests
function renderMemberCard() {
}
$(function () {
    renderPage();
    renderUserList();
});
// Stuff
const debounce = (fn, time) => {

    let timeout;

    return function() {
       // const functionCall = 
    }

}


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


