export const renderProfile = function () {
    let $root = $('#root');
    let jwt = localStorage.getItem('jwt');

    let decode = parseJwt(jwt);

    let name = decode.name;
    console.log(name);


    let profile = $(`

    <h1 class="title is-1"> ${name} </h1>

    
    
    
    
    
    
    `)
    
    
    $root.append(profile)

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
    renderProfile();
    
 });
