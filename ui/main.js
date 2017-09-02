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
    };
    
    
    //Make the request
    request.open('GET','http://anoopkumar21297.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit=document.getElementById('sub_btn');
submit.onclick=function(){
  //make a request to the server and send a name  
   var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //do something
            if(request.status==200){//check if it is successful
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list='';
                    for(var i=0; i< names.length; i++){
                        list +='<li>' + names[i] + '</li>';
                    }
                    var ul=document.getElementById('namelist');
                    ul.innerHTML = list;
            }    
        }
        //else do nothing
    };
    
    var nameInput=document.getElementById('name');
    var nameValue=nameInput.value;
    //Make the request
    request.open('GET','http://anoopkumar21297.imad.hasura-app.io/submit-name?name='+nameInput,true);
    request.send(null);
  //capture a list of name and render it as  a list


};

