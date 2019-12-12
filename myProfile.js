export const renderProfile = function () {
    let $root = $('#root');
    let jwt = localStorage.getItem('jwt');
    console.log(jwt);
    let decode = parseJwt(jwt);

    console.log(decode);
    let name = decode.name;
    let grade = decode.data.grade;
    console.log(name);


    let header = $(`

    <h1 class="title is-1"> ${name} </h1>
    <h5 class="subtitle is-5">${grade}</h5>

    `)


    let interests = $(`
    
    
    `)
    

    let interests = $(`
    
    
    `)
    
    $root.append(header)

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
