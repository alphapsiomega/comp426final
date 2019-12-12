//here we need to have I think just one method that they can interact with?

//this function renders the calendar. Probably doesn't need to be async but 
//just wanted to put it there



      /*

export function handleClientLoad() {
    console.log("doing this now");
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
    checkAuth();
  }
  
  export function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
        handleAuthResult);
  }
  
  export function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult) {
      authorizeButton.style.visibility = 'hidden';
      makeApiCall();
    } else {
      authorizeButton.style.visibility = '';
      authorizeButton.onclick = handleAuthClick;
     }
  }
  
  export function handleAuthClick(event) {
    gapi.auth.authorize(
        {client_id: clientId, scope: scopes, immediate: false},
        handleAuthResult);
    return false;
  }

  function makeApiCall() {
    gapi.client.load('calendar', 'v3', function() {
      var request = gapi.client.calendar.events.list({
        'calendarId': 'primary'
      });
            
      request.execute(function(resp) {
        for (var i = 0; i < resp.items.length; i++) {
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(resp.items[i].summary));
          document.getElementById('events').appendChild(li);
        }
      });
    });
  }


export async function renderPage() {

    let r = `<div>
        <form>
            <div class="select is-rounded">
            <select>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
            
        </select>
            </div>
        </form>
    </div`

}

export async function sendEvent() {




}

*/

const $root = $('#root');

