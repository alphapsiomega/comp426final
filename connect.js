//import { rootCertificates } from "tls";

//This will have the stuff that is.. the app. This will be the most complicated and we're probably
//gonna have to reference the render file for a09 or something

const $root = $('#root');

//this is to render the whole page. It will call the list render in it, which will call the 
//membercard render, etc etc
export async function renderPage() {

    let appBox = `

        <div class="container has-text-centered is-connect-box" id="appBox">
            <button type="button" class="button is-warning is-center" id="open">Welcome to Alpha Psi Omega Connect</button>
        </div>
    
    `;

    $root.on('click', "#open", handleWelcomeButtonPress);
    $root.append(appBox);

}

export async function handleWelcomeButtonPress(event) {

    

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