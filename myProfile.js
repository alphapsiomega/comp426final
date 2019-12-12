export const renderProfile = function () {
    let $root = $('#root');
    let jwt = localStorage.getItem('jwt');
    console.log(jwt);
    let decode = parseJwt(jwt);

    //console.log(decode);
    let name = decode.name;
    let grade = decode.data.grade;
   // console.log(name);


    let header = $(`

    <h1 class="title is-1"> ${name} </h1>
    <h5 class="subtitle is-5">${grade}</h5>

    `)


    // for (let i = 0; i < 11; i ++) { // loops through all of the potential positions

    let interests  = $('<div class="list is-hoverable">');

    console.log(decode.data.positions)

    

    if (decode.data.positions.isDirector) {
        interests.append(`<a class="list-item" >
        Director
      </a>`);
    } 

    if (decode.data.positions.isProducer) {
        interests.append(`<a class="list-item" >
        Producer
      </a>`);
    } 

    if (decode.data.positions.isStageManager) {
        interests.append(`<a class="list-item" >
        Stage Manager
      </a>`);
    } 

    if (decode.data.positions.isCostumer) {
        interests.append(`<a class="list-item" >
       Costumer
      </a>`);
    } 

    if (decode.data.positions.isSetDesigner) {
        interests.append(`<a class="list-item" >
        Costumer
       </a>`);
    }

    if (decode.data.positions.isLighting) {
        interests.append(`<a class="list-item" >
        Light Designer
       </a>`);
    }

    if (decode.data.positions.isSoundDesigner) {
        interests.append(`<a class="list-item" >
        Sound Designer
       </a>`);
    }

    if (decode.data.positions.isWriter) {
        interests.append(`<a class="list-item" >
        Writer
       </a>`);
    }

    if (decode.data.positions.isExec) {
        interests.append(`<a class="list-item" >
        Exec Board Member
       </a>`);
    }



    if (decode.data.positions.isProps) {
        interests.append(`<a class="list-item" >
        Props Master
       </a>`);
    }

    if (decode.data.positions.isStagehand) {
        interests.append(`<a class="list-item" >
        Stagehand
       </a>`);
    }




    interests.append(`</div>`);

    // for (var key in decode.data.positions) {
    //     if (decode.data.positions.hasOwnProperty(key)) {
  
    //         if (decode.data.positions[key]) {
    //             console.log(decode.data.positions[key].value);
                
    //         }
           
    //     }



    

    // let interests = $(`
    
    
    // `)
    
    


$root.append(header)
$root.append(interests);
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
