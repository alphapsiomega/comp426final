let renderSignUpForm = function () {


    let $root = $('#root');

    let signUpForm = (`
    <h1 class="title is-1">Sign Up</h1>
    <section> 

    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="First Name">
    <input class="input" type="text" placeholder="Last Name">
  </div>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Password" value="">
    
    </div>
 

    <div class="field">
  <label class="label">Re-enter password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Re-enter password" value="">
    
    </div>

    <div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Username" value="">
    
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
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</section>
    `)

    $root.append(signUpForm)
}

$(function () {
    renderSignUpForm();
    
 });