/import { rootCertificates } from "tls";

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
            <input type="search" placeholder="Search..">

            <button type="submit" class="button is-warning" id="submit">Search</button>
            </form>
        </div>
        </div>
        
    `;


            <button type="submit" class="button is-white" id="submit">Search</button>
            </form>
        </div>
        
        
    `;
    for(let i=0; i<50; i++){
        //alert("good lord");
        r+=`
            <div class="container is-profile-card">
                <img class="is-profile-pic" src="OldWell.png"> Michael Sparks
            </div>
            `;
    }
    r+=`</div>`

    $('#appBox').replaceWith(r);
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