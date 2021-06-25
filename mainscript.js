window.onload()= function(){
    alert( "opoppo");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user = urlParams.get('name');
    $.get( `http://localhost/unity/getUserGroup.php?name=${user}`, function( data ) {
        alert( data );
      });
}