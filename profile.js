export const renderLogInForm = function () {
    const $root = $('#root'); // root is whatever has root as the ID

    const signInForm = 


    `
    <div id="login">
            <div class="login-card">
                <div class="card-title">
                    <h1>Alpha Psi Omega Login</h1>
                </div>

                <div class="content">
                    <form id="signIn-form">
                        <input id="emailLogin" type="email" name="email" title="email" placeholder="Email" required autofocus>
                        <input id="passwordLogin" type="password" name="password" title="password" placeholder="Password" required>

                        <div class="field">
                            <div class="control">
                                <button type="submit" id = "logIn" class="btn btn-primary">Login</button>
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

$root.append(signInForm);
$('#logIn').on("click", null, null, handleSubmitLogIn );
}



export const renderSignUpForm = async function (event) {
    const $root = $('#root'); // root is whatever has root as the ID

    const signInForm = 


    `
    <div id="login">
            <div class="login-card">
                <div class="card-title">
                    <h1>Alpha Psi Omega Sign Up</h1>
                </div>

                <div class="content">
                    <form id="login-form">
                        <input id="emailSignUp" type="email" name="email" title="email" placeholder="Email" required autofocus>
                        <input id="passwordSignUp" type="password" name="password" title="password" placeholder="Password" required>
                        <input id="reEnterPasswordSignUp" type="password" name="password" title="password" placeholder="Re-Enter Password" required>
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

$root.append(signInForm);
$('#signUp').on("click", null, null, handleSignUp);

}

export const handleSignUp = async function (event) {
    event.preventDefault();
    console.log($('#passwordSignUp').val())

    // result of axios call 
    let r = axios.post('http://localhost:3000/account/create', {
        name: "" + $(`#emailSignUp`).val() + "",
        pass: "" + $(`#passwordSignUp`).val() + "",
        data: {
            fname: "" + $(`#emailSignUp`).val() + "",
            lname: "" + $(`#passwordSignUp`).val() + "",
         
        }
    }).then(response => {
        alert("hi");
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

    window.location.href = "http://localhost:3001/index.html"
    

}



export const handleSubmitLogIn = async function (event) {
    event.preventDefault();

    console.log($('#emailLogin').val());
    console.log($('#passwordLogin').val());
    // result of axios call 
    let r = await axios ({
        method: "post",
        url: "http://localhost:3000/account/login",
        data: {
            name: "" + $('#emailLogin').val() + "",
            pass: "" + $('#passwordLogin').val() + ""
        }
    });

    

    console.log(r);
    window.jwt = r.data.jwt
    let request = axios.get('http://localhost:3000/account/status', 
    {
        headers: {
            "Authorization": "Bearer " + window.jwt
        }
    }
);
   
    request.then(response => {
        console.log(response.data.fname);
        
         window.location.href = "http://localhost:3001/index.html"
         alert("authenticated as " + r.data.name)
        // alert("signed in as " + response.data.fname);
       
    }). catch (error => {
        console.log("failed to authenticate")
        alert(error);
    });
    
    



}




$(function () {
    renderSignUpForm();
    renderLogInForm();
});