


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
                        <input id="userLogin" type="email" name="email" title="email" placeholder="Email" required autofocus>
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

            <div class="login-card">
            <div class="card-title">
                <h1>Alpha Psi Omega Sign Up</h1>
            </div>

            <div class="content">
                <form id="login-form">
                <input id="fNameSignUp" type="email" name="email" title="email" placeholder="First Name" required autofocus>
                <input id="lNameSignUp" type="email" name="email" title="email" placeholder="Last Name" required autofocus>
                    <input id="userSignUp" type="email" name="email" title="email" placeholder="Username" required autofocus>
                    <input id="passwordSignUp" type="password" name="password" title="password" placeholder="Password" required>
                    
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








$root.append(forms);
$('#logIn').on("click", null, null, handleSubmitLogIn );

$('#signUp').on("click", null, null, handleSignUp);



}





export const handleSignUp = async function (event) {
    event.preventDefault();
    console.log($('#passwordSignUp').val())

    // result of axios call 
    let r = axios.post('http://localhost:3000/account/create', {
        name: "" + $(`#userSignUp`).val() + "",
        pass: "" + $(`#passwordSignUp`).val() + "",
        data: {
            fname: "" + $(`#fNameSignUp`).val() + "",
            lname: "" + $(`#lNameSignUp`).val() + "",
         
        }
    }).then(response => {
        console.log("yo");
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
    
    let id = $('#userSignUp').val();
    let r2 = axios.post('http://localhost:3000/public/users' + id, {
        
        data: {
            name: "" + $(`#userSignUp`).val() + "",
        pass: "" + $(`#passwordSignUp`).val() + "",
            data: {
            fname: "" + $(`#fNameSignUp`).val() + "",
            lname: "" + $(`#lNameSignUp`).val() + "",
         
        }}
    }).then(response => {
        console.log("yee");
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });




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

    


    
    // this creates a JWT token
<<<<<<< HEAD
=======


    var token = r.data.jwt;
    localStorage.setItem('jwt', token);
    var decoded = parseJwt(token);
>>>>>>> 66a43a47b2995eb6a185aa4cd8a5a38d3d5b8cd7
    
    
    var username = decoded.name;
    
   

<<<<<<< HEAD



    var token = r.data.jwt;

    // decoded token
    var decoded = parseJwt(token);
    



    var username = decoded.name;


    // decoded holds the JSON object

   


=======
>>>>>>> 66a43a47b2995eb6a185aa4cd8a5a38d3d5b8cd7
    let request = axios.get('http://localhost:3000/account/status', 
    {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
);
    request.then(response => {
   
        //  window.location.href = "http://localhost:3001/index.html"
       
    }). catch (error => {
        console.log("failed to authenticate")
        alert(error);
    });  

    window.location.href = "http://localhost:3001/myProfile.html"

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