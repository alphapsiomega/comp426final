let renderSignUpForm = function () {


    let $root = $('#root');

    let signUpForm = (`
    <h1 class="title is-1">Sign Up</h1>
    <section> 

    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" id = "fNameSignUp"  placeholder="First Name">
    <input class="input" type="text"  id = "lNameSignUp" placeholder="Last Name">
  </div>
</div>


 

  

    <div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" id = "userSignUp" placeholder="Username" value="">
    
    </div>


    <div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text"  id = "passwordSignUp"  placeholder="Password" value="">
    
    </div>

    <div class="field">
    <label class="label">Re-enter password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Re-enter password" value="">
      
      </div>


<div class="field">
  <label class="label">Grade</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Freshman</option>
        <option>Sophomore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
    </div>
  </div>
</div>




<div class="field">
  <div class="control">
  <label class="label">Areas of Interest</label>
    <label class="checkbox">
      <input type="checkbox">
      Director
    </label>
    <label class="checkbox">
    <input type="checkbox">
    Producer
  </label>
  <label class="checkbox">
  <input type="checkbox">
  Stage Manager
</label>

  <label class="checkbox">
  <input type="checkbox">
  Set Designer
</label>
<label class="checkbox">
<input type="checkbox">
Costumer


</div>

<div class="control">
</label>
<label class="checkbox">
<input type="checkbox">
Lighting Designer
</label>

<label class="checkbox">
<input type="checkbox">
Sound Designer
</label>

<label class="checkbox">
<input type="checkbox">
Writer
</label>


<label class="checkbox">
<input type="checkbox">
Executive
</label>


<label class="checkbox">
<input type="checkbox">
Stagehand
</label>

</div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" id = "signUp" >Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</section>
    `)

    $root.append(signUpForm)
    $('#signUp').on("click", null, null, handleSignUp);
}

$(function () {
    renderSignUpForm();
    
 });


 export const handleSignUp = async function (event) {
  event.preventDefault();
  console.log($('#passwordSignUp').val())
  console.log($(`#userSignUp`).val());
  console.log( $(`#passwordSignUp`).val());
  console.log($(`#fNameSignUp`).val() )
  console.log($(`#lNameSignUp`).val())

  // result of axios call 
  let r = axios.post('http://localhost:3000/account/create', {
      name: "" + $(`#userSignUp`).val() + "",
      pass: "" + $(`#passwordSignUp`).val() + "",
      data: {
          fname: "" + $(`#fNameSignUp`).val() + "",
          lname: "" + $(`#lNameSignUp`).val() + "",
       
      }
  }).then(response => {
      alert("hi");
      console.log(response.data);
  }).catch(error => {
      console.log(error);
  });

  
  // window.location.href = "http://localhost:3001/index.html"
  

}


