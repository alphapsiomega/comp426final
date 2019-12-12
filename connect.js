//import { rootCertificates } from "tls";

//This will have the stuff that is.. the app. This will be the most complicated and we're probably
//gonna have to reference the render file for a09 or something

const $root = $('#root');

let jwt = localStorage.getItem('jwt');
console.log(jwt);
let decode = parseJwt(jwt);


//let jwt = localStorage.getItem('jwt')
//console.log("jwt is " + jwt);

//this is to render the whole page. It will call the list render in it, which will call the 
//membercard render, etc etc
export async function renderPage() {

    let appBox = `
        <div class="container has-text-centered is-connect-box" id="appBox">
            <div id="replace">
            <button type="button" class="button is-warning is-center" id="open">Welcome to Alpha Psi Omega Connect</button>
            </div>
        </div>
    
    `;

    $root.on('click', "#open", handleWelcomeButtonPress);
    $root.append(appBox);

}

export async function handleWelcomeButtonPress(event) {

  console.log("Welcome, " + decode.data.fname);

    
    

    let r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <form>
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
            <div class="field">
                            <div class="control" style="padding: 20px">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
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

            <form>
            <select>
                <option value="any">Any</option>
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
            <div class="field">
                            <div class="control" style="padding: 20px">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
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

    for(let i=0; i<50; i++){
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
                    Lopper Dopper!
                </div>
                <div class="column">
                    <button type="button" class="button is-warning" id="request">Request</button>
                </div>
            </div>
            </div>
            `;
    }

}
else {

    r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <form>
            <select>
                <option value="any">Any</option>
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
            <div class="field">
                            <div class="control" style="padding: 20px">
                                    <input class="input is-rounded" type="text" placeholder="Search">
                            </div>
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
