


export const renderForms = function () {
    const $root = $('#root'); // root is whatever has root as the ID

    const forms = 
    `
    <div id="login">
            <div class="login-card">
                <div class="card-title">
                    <h1>Alpha Psi Omega Login</h1>
                </div>

                <div class="content">
                    <form id="signIn-form">
                        <input class="input is-rounded" id="userLogin" type="email" name="email" title="email" placeholder="Email" required autofocus>
                        <p></p>
                        <input class="input is-rounded" id="passwordLogin" type="password" name="password" title="password" placeholder="Password" required>
                        <p></p>
                        <div class="field">
                            <div class="control">
                                <button type="submit" id = "logIn" class="btn btn-primary">Login</button>
                            </div>
                            <p></p>
                            <div class="control">
                            <button type="submit" id = "logOut" class="btn btn-primary">Logout</button>
                        </div>
                        </div>
                        <p style="padding-bottom: 297px"></p>

                        <div class="field">
                            <div class="control">
                                <p id="message"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="login-card">
            <div class="card-title">
                <h1>Alpha Psi Omega Sign Up</h1>
            </div>

            <div class="content">
                <form id="login-form">
                <input class="input is-rounded" id="fNameSignUp" type="email" name="email" title="email" placeholder="First Name" required autofocus>
                <p></p>  
                <input class="input is-rounded" id="lNameSignUp" type="email" name="email" title="email" placeholder="Last Name" required autofocus>
                <p></p>      
                <input class="input is-rounded" id="userSignUp" type="email" name="email" title="email" placeholder="Username" required autofocus>
                <p></p>      
                <input class="input is-rounded" id="passwordSignUp" type="password" name="password" title="password" placeholder="Password" required>
                <p></p>      
                <div class="field">
  <div class="control">

  <div class="field">
  <label class="label">Grade</label>
  <div class="control">
    <div class="select">
      <select id = "grade">
        <option>Freshman</option>
        <option>Sophomore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
    </div>
  </div>
</div>


  <label class="label">Areas of Interest</label>
    <label class="checkbox">
      <input type="checkbox" id = "isDirector">
      Director
    </label>
    <label class="checkbox">
    <input type="checkbox"  id = "isProducer">
    Producer
  </label>
  <label class="checkbox">
  <input type="checkbox" id = "isStageManager">
  Stage Manager
</label>

  <label class="checkbox">
  <input type="checkbox" id = "isSetDesigner">
  Set Designer
</label>
<label class="checkbox">
<input type="checkbox" id = "isCostumer">
Costumer


</div>

<div class="control">
</label>
<label class="checkbox">
<input type="checkbox" id = "isLighting">
Lighting Designer
</label>

<label class="checkbox">
<input type="checkbox" id = "isSound">
Sound Designer
</label>

<label class="checkbox">
<input type="checkbox" id = "isProps">
Props Master
</label>

<label class="checkbox">
<input type="checkbox" id = "isWriter">
Writer
</label>


<label class="checkbox">
<input type="checkbox" id = "isExec">
Executive
</label>


<label class="checkbox">
<input type="checkbox" id = "isStagehand">
Stagehand
</label>

<p></p>  
<label class="label">Member of Alpha Psi Omega? <input type="checkbox"  id = "isMember" > </label>


</div>
</div>
                    <div class="field">
                        <div class="control">
                            <button type="submit" id = "signUp" class="btn btn-primary">Sign Up</button>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <p id="message"></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </div>

       
`

 console.log($('#isMember').is(':checked'));
$root.append(forms);
$('#logIn').on("click", null, null, handleSubmitLogIn );
$('#logOut').on("click", null, null, handleSubmitLogOut );
$('#signUp').on("click", null, null, handleSignUp);



}

export const handleSubmitLogOut = async function (event) {
    console.log("removed");
    localStorage.removeItem('jwt');
    window.location.href = "http://localhost:3001/index.html"

}
export const handleSignUp = async function (event) {
    event.preventDefault();
    console.log($('#passwordSignUp').val())
    console.log($('#isMember').val());

    // result of axios call 
    let r = axios.post('http://localhost:3000/account/create', {
        name: "" + $(`#userSignUp`).val() + "",
        pass: "" + $(`#passwordSignUp`).val() + "",
        data: {
            fname: "" + $(`#fNameSignUp`).val() + "",
            lname: "" + $(`#lNameSignUp`).val() + "",
            isMember: $('#isMember').is(':checked'),
            positions: {
                isDirector: $('#isDirector').is(':checked'),
                isProducer: $('#isProducer').is(':checked'),
                isStageManager: $('#isStageManager').is(':checked'),
                isCostumer: $('#isCostumer').is(':checked'),
                isSetDesigner: $('#isSetDesigner').is(':checked'),
                isLighting: $('#isLighting').is(':checked'),
                isSound: $('#isSound').is(':checked'),
                isWriter: $('#isWriter').is(':checked'),
                isExec: $('#isExec').is(':checked'),
                isProps: $('#isProps').is(':checked'),
                isStagehand: $('#isStagehand').is(':checked'),
            },
       
            grade: $('#grade option:selected').text()

         
        }
    }).then(response => {
        
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
    
    let id = $('#userSignUp').val();
    let r2 = axios.post('http://localhost:3000/public/users/user' + id, {
        
        data: {
            name: "" + $(`#userSignUp`).val() + "",
            pass: "" + $(`#passwordSignUp`).val() + "",
            data: {
            fname: "" + $(`#fNameSignUp`).val() + "",
            lname: "" + $(`#lNameSignUp`).val() + "",
            
            isMember: $('#isMember').is(':checked')
         
        }}
    }).then(response => {
        console.log("yee");
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });


    // let r3 = axios.



    // let r2 = await axios ({
    //     method: "post",
    //     url: "http://localhost:3000/public/users",
    //     data: {
    //         data: {
    //             name: "" + $('#userSignUp').val() + "",
    //             pass: "" + $('#passwordSignUp').val() + ""
    //         }
          
            
            
    //     }
    // }).then(response => {
    //     console.log("hi");
    //     console.log(response.data);
    // }).catch(error => {
    //     console.log(error);
    // });
   window.location.href = "http://localhost:3001/myProfile.html"
  
}


export const handleSubmitLogIn = async function (event) {
    event.preventDefault();
    console.log($('#userLogin').val());
    console.log($('#passwordLogin').val());
    // result of axios call 
    let r = await axios ({
        method: "post",
        url: "http://localhost:3000/account/login",
        data: {
            name: "" + $('#userLogin').val() + "",
            pass: "" + $('#passwordLogin').val() + ""
        }
    });


   
    // decoded holds the JSON object

   
    var token = r.data.jwt;

    localStorage.setItem('jwt', token); // put it in 



    let request = axios.get('http://localhost:3000/account/status', 
    {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
);
    request.then(response => {
   
         window.location.href = "http://localhost:3001/myProfile.html"
       
    }). catch (error => {
        console.log("failed to authenticate")
        alert(error);
    });  

  

}



function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};




$(function () {
   renderForms();
   
});