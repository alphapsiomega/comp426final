//import { rootCertificates } from "tls";

//This will have the stuff that is.. the app. This will be the most complicated and we're probably
//gonna have to reference the render file for a09 or something

const $root = $('#root');

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

    let r = `
    <div class="container is-connect-box2" id="appBox">

        <div>

        <div class="is-top-bar">

            <form>
            <select>
                <option value="any">Any</option>
                <option value="actors">Actors</option>
                <option value="directors">Directors</option>
                <option value="producers">Producers</option>
            </select>
            <div class="field">
                            <div class="control" style="padding: 20px">
                                    <input class="input is-rounded" type="text" placeholder="Search Companies">
                            </div>
                </div>
            <div style="padding-bottom: 10px">
                <button type="submit" class="button is-white is-centered" id="submit">Search</button>
            </div
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

    $('#appBox').replaceWith(r);
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