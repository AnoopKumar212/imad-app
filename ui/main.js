console.log('Loaded!');

var button= document.getElementById('counter');
button.onclick=function()
{
    //Create a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //do something
            if(request.status==200){//check if it is successful
                var counter=request.responseText;
                var span= document.getElementById('count');
                span.innerHTML= counter.toString();
            }    
        }
        //else do nothing
    }
    
    
    //Make the request
    request.open('GET','http://anoopkumar21297.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
}
