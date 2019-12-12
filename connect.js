//import { rootCertificates } from "tls";

//This will have the stuff that is.. the app. This will be the most complicated and we're probably
//gonna have to reference the render file for a09 or something

const $root = $('#root');

//import axios from 'axios';





/*
let jwt = localStorage.getItem('jwt');
console.log(jwt);
let decode = parseJwt(jwt);
*/

//let jwt = localStorage.getItem('jwt')
//console.log("jwt is " + jwt);

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

//this is to render the whole page. It will call the list render in it, which will call the 
//membercard render, etc etc

export async function handleSearchButtonPress(event) {


    let search = document.getElementById('myInput').value;
    console.log(search);

    let r = `
    <div class="container is-connect-box2" id="appBox">
        <div>
        <div class="is-top-bar">
            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>
            <p></p>
            <form>
            
            <div class="field">
            <form autocomplete="off" action="/action_page.php">
            <div class="autocomplete" style="width:300px; padding-top: 20px; margin: auto; text-align: center">
              <input class="input is-rounded" id="myInput" type="text" name="myCountry" placeholder="Search" width="500">
            </div>
          </form>
                </div>
                <div style="padding-bottom: 20px">
                
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="search">Search</button>
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

    let jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    let decode = parseJwt(jwt);

    const response = await axios({
        method: 'GET',
        url: "http://localhost:3000/public/users",
      });

      let order=[];
      let count=0;

    for(var key in response.data.result) {
        
        if(response.data.result.hasOwnProperty(key)) {
              
                    //console.log(response.data.result[key].body);

                    console.log(response.data.result[key]);
                    
                    //let str = response.data.result[key].body;
                    //str = str.replace(/\s/g, '');
                    //str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                    //console.log(str);

                    console.log("INFO IS" + ("" + response.data.result[key].data.fname + " "+ response.data.result[key].data.lname));
                    console.log("SEARCH IS " + search);
    
                    if(search==("" + response.data.result[key].data.fname + " "+ response.data.result[key].data.lname)) {
                        console.log("This happened");
                        order[count]=`
                        <div class="is-profile-card">
                        <div class="columns">
                            <div class="column">
                                    <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                            </div>
                            <div class="column">
                                <b>${response.data.result[key].data.fname} ${response.data.result[key].data.lname}</b></br>
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

                        //$root.on('click', "#"+(str), handleDeleteButtonPress);
                    console.log(count);
                    count++;
            
            
        }
    }

    for(let i=order.length-1; i>=0; i--) {

        console.log("One");

        r+=order[i];

    }

    r+=`</div>`

    $root.on('click', "#postBox", handlePostBoxClick);
    $root.on('click', "#request", handleRequestButtonPress);
    $root.on('click', "#posts", handlePostsTabClick);
    $root.on('click', "#search", handleSearchButtonPress);
    
    
    //

    $('#appBox').replaceWith(r);



}
export async function renderPage() {

    const a = await axios({
        method: 'GET',
        url: "http://localhost:3000/public/users",
      });
    
      let arr=[];
      let c=0;
    
    for(var key in a.data.result) {
        
        if(a.data.result.hasOwnProperty(key)) {

            //console.log(a.data.result[key].data.fname);
    
            //arr[c] = "renis";
            arr[c] = ""+a.data.result[key].data.fname + " " + a.data.result[key].data.lname;
            console.log(arr[c]);
            c++;
            
    
        }
    
    }

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
            <p></p>
            <form>
            
            <div class="field">
            <form autocomplete="off" action="/action_page.php">
            <div class="autocomplete" style="width:300px; padding-top: 20px; margin: auto; text-align: center">
              <input class="input is-rounded" id="myInput" type="text" name="myCountry" placeholder="Search" width="500">
            </div>
          </form>
                </div>
                <div style="padding-bottom: 20px">
                
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="search">Search</button>
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

    let jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    let decode = parseJwt(jwt);

    const response = await axios({
        method: 'GET',
        url: "http://localhost:3000/public/users",
      });

      let order=[];
      let count=0;

    for(var key in response.data.result) {
        
        if(response.data.result.hasOwnProperty(key)) {
              
                    //console.log(response.data.result[key].body);

                    console.log(response.data.result[key]);
                    
                    //let str = response.data.result[key].body;
                    //str = str.replace(/\s/g, '');
                    //str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                    //console.log(str);
    
                        console.log(key);
                        order[count]=`
                        <div class="is-profile-card">
                        <div class="columns">
                            <div class="column">
                                    <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                            </div>
                            <div class="column">
                                <b>${response.data.result[key].data.fname} ${response.data.result[key].data.lname}</b></br>
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

                        //$root.on('click', "#"+(str), handleDeleteButtonPress);
                    console.log(count);
                    count++;
            
            
        }
    }

    for(let i=order.length-1; i>=0; i--) {

        r+=order[i];

    }

    /*
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
    */
    r+=`</div>`

    $root.on('click', "#postBox", handlePostBoxClick);
    $root.on('click', "#request", handleRequestButtonPress);
    $root.on('click', "#posts", handlePostsTabClick);
    $root.on('click', "#search", handleSearchButtonPress);
    
    
    //

    $root.append(r);

    console.log(document.getElementById("myInput"));
    autocomplete(document.getElementById("myInput"), arr);

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

    let str = textContent;
                    str = str.replace(/\s/g, '');
                    str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    console.log(decode.data.fname);
    
    try {
    
    const response = await axios({
        method: 'POST',
        url: "http://localhost:3000/public/posts/"+str,
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
        
          
                console.log(response.data.result);
                for (var key in response.data.result) {
                    if (response.data.result.hasOwnProperty(key)) {
                        console.log(response.data.result[key].data.fname);
                    }
    
            
        }}
    
       
         ) .catch(error => console.log(error))
        */

}

export async function handleDeleteButtonPress(event) {

    //event.preventDefault();

    let jwt = localStorage.getItem('jwt');
    console.log(jwt);
    let decode = parseJwt(jwt);

    let deleteId = event.target.getAttribute("id");

    
        const result = await axios({
            method: 'delete',
            url: "http://localhost:3000/public/posts/" + deleteId,
          }); 

          handlePostsTabClick(event);

          //let r;

          

    

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
                <div class="select is-rounded">
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

    if(content!="users") {
    r = `
    <div class="container is-connect-box2" id="appBox">
        <div>
        <div class="is-top-bar">
            <div class="is-post-button" id="postBox">
                Click here to post!
            </div>
            <p></p>
            <form>
            
            <div class="field">
            <form autocomplete="off" action="/action_page.php">
            <div class="autocomplete" style="width:300px; padding-top: 20px; margin: auto; text-align: center">
              <input class="input is-rounded" id="myInput" type="text" name="myCountry" placeholder="Search" width="500">
            </div>
          </form>
                </div>
                <div style="padding-bottom: 20px">
                
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="search">Search</button>
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

                    console.log(response.data.result[key].body);
                    
                    let str;

                    try{
                    str = response.data.result[key].body;
                    
                    str = str.replace(/\s/g, '');
                    str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                    console.log(str);
                    }
                    catch(error) {
                        console.log(error);
                    }

    
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
                                <button type="button" class="button is-danger" id="${str}">Delete</button>
                            </div>
                        </div>
                        </div>
                        `;

                        $root.on('click', "#"+(str), handleDeleteButtonPress);
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
            <p></p>
            <form>
            
            <div class="field">
            <form autocomplete="off" action="/action_page.php">
            <div class="autocomplete" style="width:300px; padding-top: 20px; margin: auto; text-align: center">
              <input class="input is-rounded" id="myInput" type="text" name="myCountry" placeholder="Search" width="500">
            </div>
          </form>
                </div>
                <div style="padding-bottom: 20px">
                
            </div>
            <div style="padding-bottom: 30px">
                <button type="submit" class="button is-white is-centered" id="search">Search</button>
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




    let jwt = localStorage.getItem('jwt');
    //console.log(jwt);
    let decode = parseJwt(jwt);

    const response = await axios({
        method: 'GET',
        url: "http://localhost:3000/public/users",
      });

      let order=[];
      let count=0;

    for(var key in response.data.result) {
        
        if(response.data.result.hasOwnProperty(key)) {
              
                    //console.log(response.data.result[key].body);

                    console.log(response.data.result[key]);
                    
                    //let str = response.data.result[key].body;
                    //str = str.replace(/\s/g, '');
                    //str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                    //console.log(str);
    
                        console.log(key);
                        order[count]=`
                        <div class="is-profile-card">
                        <div class="columns">
                            <div class="column">
                                    <img class="is-profile-pic" width="50" height="50" src="OldWell.png">
                            </div>
                            <div class="column">
                                <b>${response.data.result[key].data.fname} ${response.data.result[key].data.lname}</b></br>
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

                        //$root.on('click', "#"+(str), handleDeleteButtonPress);
                    console.log(count);
                    count++;
            
            
        }
    }

    for(let i=order.length-1; i>=0; i--) {

        r+=order[i];

    }
}

    r+=`</div>`;

    
    $('#appBox').replaceWith(r);
    if(content=="posts"||content=="users") {
        
        $(document).off();
    }
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

