// var firstname;
// firstname = 'mohamed';
// firstname = "ahmed";
// firstname = "eslam";
// firstname = 1 + 1;

// firstname = 10;
// document.write(firstname);
// console.log(firstname);
// alert(firstname);

// var typeoffirstname = typeof(firstname);


// window.alert('test');
// document.write(x);  
// condition

// var x;

// x = 20 < 10;

// if(x){
//     var username = "mohamed";
//     console.log(username);
// }else{
//    console.log("error"); 
// }


// var tgname = document.getElementById("name");
// var tagnameclass = tgname.value;
// var tgname = document.getElementsByClassName("name");
// var tgname = document.getElementsByTagName("input");
// console.log(tagnameclass);
// var btn = document.getElementById("send");
// btn.onclick;



// var x = document.getElementById("text").value;
// console.log(x);

// var x = "dasdwaw";
// var y = "awdawd";
// var o = "*";

// if(o == "+"){
//     console.log(x + y);
// }else if(o == "-"){
//     console.log(x - y);
// }else if (o == "*"){
//     console.log(x * y);
// }else if (o == "/"){
//     console.log(x / y);
// }

// if(o == "+"){
//     console.log(x + y);
// }
// if(o == "-"){
//     console.log(x - y);
// }
// if (o == "*"){
//     console.log(x * y);
// }
// if (o == "/"){
//     console.log(x / y);
// }







// var l , type;
// type = 90;
// l = 10;

// if(type == 95){
//     document.write("price is : "+ l * 20);
// }else if (type == 92){
//     document.write("price is : "+ l * 10);
// }else{
//     document.write("error");
// }

// switch(type){
//     case 95:
//         document.write("price is : "+ l * 20);
//     break;
//     case 92:
//         document.write("price is : "+ l * 10);
//     break;
//     default :
//         document.write("error");
// }



// var x = 10;
// var y = 20;

// var name = "mohamed";


// if

// switch(o){
//     case "+":
//         console.log(x + y);
//     break;  
//     case "-":
//         console.log(x - y);
//     break;   
//     case "*":
//         console.log(x * y);
//     break;   
//     case "/":
//         console.log(x / y);
//     break;     
//     default :
//         console.log("error");
// }






// var d = 75;


// if(d <= 50){
//     console.log("f");
// }else if (d <= 60){
//     console.log("d");
// }else if (d <= 70){
//     console.log("c");
// }else if (d <= 80){
//     console.log("b");
// }else if(d <= 100){
//     console.log("a");
// }else {
//     console.log("none");
// }



// looping
// for , while , do while 

// while
// var x = 1;
// do{

//         document.write(x + "<br>");

//     x++;
// }while(15 > x);




// for loop
// for(var x = 1; 15 > x ; x++){
//     document.write(x + "<br>");
// }

// var num;

// function loop(num,location,name){
//     for(var x = 1; num >= x ; x++){
//         if(x == location){
//             document.write( name+ "<br>");
 
//         }else{
//         document.write(x + "<br>");
//         }
//     }
// }


// loop(14,6,"daila");

// var loop = function(num){
    
// }
// console.log(loop);

// loop(10);
// loop(20);



// var salary = function(x){
//     return x + 200;
// };

// var welcome = function(name){
//     document.write("welcome "+name);
// };
// welcome("masrawy");
// document.write(salary(2000));


// document.getElementById("send").onclick = alert("test");



// document.getElementById("send").onclick = function(){

//    var x = parseInt(document.getElementById("x").value);

//    var y = parseInt(document.getElementById("y").value);

//    var op = document.getElementById("op").value;


//    switch(op){

//         case "+":
//             var res = x + y;
//             document.write("result is : "+ res); 
//         break;
//         case "-":
//             var res = x -y;
//             document.write("result is : "+ res); 
//         break;
//         case "*":
//             var res = x * y;
//             document.write("result is : "+ res); 
//         break;
//         case "/":
//             var res = x / y;
//             document.write("result is : "+ res); 
//         break;
//    }


// };


// var names = ["mohamed","ahmed","masrawy","amar"];

// var count = names.length;

// for(var x = 0; x < count ; x++){

//     console.log(names[x]);
// }

// var data = [];

// function add(){

//     var name = document.getElementById("name").value;
//     var task = document.getElementById("task").value;

//     var ob = { name : name , task : task};
//     data.push(ob);
//     show();
// }


// function show(){
//     var st = '';
//     var count = data.length;
//     for(var i = 0; i < count;i++){
//         st += "<h2> task is : " + data[i]['task']  + "</h2> <span>" + data[i]['name'] + "</span> <button onclick='deleteElement( " + i + ")' >Delete</button> <button onclick='updateElement( " + i + ")' >Update</button> ";
//     }
//     document.getElementById("res").innerHTML = st;
// }


// function deleteElement(x){
//     // alert(i);
//     data.splice(x,1);
//     show();
// }

// function updateElement(y){
//     // alert(x);
//         // var update = '<br><input id="taskupdate" value="mohamed" type="text" placeholder="task"><input value=" eslam" id="nameupdate" type="text" placeholder="name"><button onclick="doupdate(' + x +' )">update</button>';

//     var update = '<br><input id="taskupdate" value=" '+ data[y]['task'] + '" type="text" placeholder="task"><input value=" '+ data[y]['name'] + '" id="nameupdate" type="text" placeholder="name"><button onclick="doupdate(' + y+' )">update</button>';
//     document.getElementById("update").innerHTML = update;
//     console.log(data);
// }


// function doupdate(soso){
//     var name = document.getElementById("nameupdate").value;
//     var task = document.getElementById("taskupdate").value;
//     console.log(name , task);    
//     data[soso]['name'] = name;
//     data[soso]['task'] = task;
//     document.getElementById("update").innerHTML = '';

//     show();
// } 



// var name = "mohamed";
// console.log("welcome " +name+ "ya");

// document.getElementById("is").innerHTML = '<div class=''></div>'

// ================================ get element ==================
// byid

// by class 
// var x = document.getElementsByClassName("is");
// // by tag
// var x = document.getElementsByTagName("div");

// console.log(x);
// =========================== set element ==================

// x.innerHTML = "<h1>mohamed</h1>";
// x.innerText = "mohamed";
// x.style.color = "red";

// function changecolor(x){
//     document.getElementById("res").classList.add(x);
// }

// function removecolor(x){
//     document.getElementById("res").classList.remove(x);
// }


// function changecolor(color){
//     localStorage.setItem("hamada",color);
//     document.body.style.backgroundColor = localStorage.getItem("hamada");
// }

// window.onload = function(){
   
//     document.body.style.backgroundColor = localStorage.getItem("hamada");
// }



// function storage(){
//     localStorage.setItem("name","ahmed");
// }







// function getstorage(){
//     console.log(localStorage.getItem("name"));
// }

// var x = document.getElementById("test").getAttribute("for");
// var res = '';
// for(var i=0; i < x; i++){
//     res += "<div>mohamed</div>";
// }
// document.getElementById("res").innerHTML =res;


// if(x == 'true'){
//     document.getElementById("test").style.display = "block";
// }else{
//     document.getElementById("test").style.display = "none";
// }







// window.onscroll = function(){
//     // console.log(window.pageYOffset);
//     if(window.pageYOffset >= 600  ){
//         document.getElementById("top").classList.add("topy");
//     }else{
//         document.getElementById("top").classList.remove("topy");
//     }  
// }

// document.getElementById("top").onclick = function(){
//     document.documentElement.scrollTop = 0;
//     document.getElementById("top").style.scrollBehavior = "smooth";
// }




// setTimeout(function(){
//     alert("text");

// }, 1000 );

// setInterval(function(){
//     alert("text");
// } , 1000);


// alert("text");
// var name = prompt("whats u name ? ");

// console.log(name);  

// function sayhi(){
//     // alert("hi");
//     document.getElementById("res").innerHTML = "<button id='send'>send</button>";

//     document.getElementById("send").addEventListener("click",test);
// }

// function test (){
        
//     alert("text");
// }


// var url =
//   "https://drive.google.com/file/d/1kltDqVgmmihmKdVIIhHxA8V53ORx_elh/view?usp=sharing";
// // console.log(url);
// var dirct = "uc?export=download&id=";
// var url_split = url.split("/");
// // console.log(url_split);
// var id = url_split[5];
// console.log(id);
// var url_splice = url_split.splice(3, 3, dirct + id);
// console.log(url_splice);
// var finesh = url_split.pop();
// // console.log(finesh);
// console.log(url_split.join("/"));







// document.getElementById("btn").onclick = function(){

//     var http = new XMLHttpRequest();

// var data = [];

//     // http.open("GET","https://reqres.in/api/users");
//     http.open("GET","status.text");

//     http.send();    

//     http.onreadystatechange = function(){
//         if(http.status == 200 & http.readyState == 4){
//             data = http.response;
//             console.log(data);
//             document.getElementById("res").innerHTML = data;
//         }
//     }
// }





















// document.getElementById("show").onclick = function(){
//     document.getElementById("pass").type = 'text';
// }


// document.getElementById("hide").onclick = function(){
//     document.getElementById("pass").type = 'password';

// }


// document.getElementById("show").onclick = function(){
//    var inp =  document.getElementById("pass");
//    if(inp.type == 'text'){
//         inp.type = 'password';
//         document.getElementById("show").innerText = "show";

//    }else{
//         inp.type = 'text';
//         document.getElementById("show").innerText = "hide";

//    }
// }


// var n = "mohamed";
// console.log(n[1]);


// document.getElementById("send").onclick = function(){
//    var username =  document.getElementById("name");
//     if(username.value.length == 0){
       
//         username.classList.add("warning");
        
//     }else{
//         username.classList.remove("warning");
//     }
// }



// document.getElementById("name").onkeyup = function(){
//     document.getElementById("res").innerText = document.getElementById("name").value.length;
// }






// for(var y = 0; y < 6; y++){

//     for(var x = 0 ; x < y ;x++){
//         document.write(x);
//     }
//     document.write("<br>");
// }

// function calc(num1){
//     for(var x = 1;x<=10;x++){
//         document.write(num1 +" * "+x+" = " + num1 * x+"<br>");
//     }
// }


// var r = '';
// for(var row =1; row<=8;row++){
//      r += "<tr>";
//     for(var column =1; column<=8;column++){
//         if(( column + row) % 2){
//             r+= "<td width='100px' height='100px' bgcolor='white'></td>";
//         }else{
//             r+= "<td width='100px' height='100px' bgcolor='black'></td>";
//         }
//     }
//     r += "</tr>";
// }
// document.getElementById("table").innerHTML = r;

var data = [];

    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://api.github.com/users");
    ajax.send();
    var res = '';
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            data = JSON.parse(ajax.response);
            var tdata = '';
            for(var i=0 ,  datacount = data.length ;i < datacount;i++){
                    tdata += "<tr>";
                    tdata += "<td>"+ data[i].login; +"</td>";
                    tdata += "<td  onClick='test("+data[i].id+")' class='imgclass'  id='img-"+ i +"'> <img src="+ data[i].avatar_url +" width='100px' height='100px'> </td>";
                    tdata += "</tr>";
            }
            // console.log(tdata);
            document.getElementById("gitusers").innerHTML = tdata;
            // var t = document.getElementById();
            
            
        }
    }

function test(x){
    x = x -1;
    var name = data[x].login;
    var persondata = [];
    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://api.github.com/users/"+name);
    ajax.send();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            persondata = JSON.parse(ajax.response);
        }
        var text = "<h1>"+ persondata.login +"</h1>";
        text += "<h1>"+ persondata.bio +"</h1>";
        document.getElementById("res").innerHTML = text;
    }    
   
}







