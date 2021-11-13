
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAHE0FjwDlvh4jcm2skvboEkZ0a8LGPwGM",
      authDomain: "chatapp-91c26.firebaseapp.com",
      databaseURL: "https://chatapp-91c26-default-rtdb.firebaseio.com",
      projectId: "chatapp-91c26",
      storageBucket: "chatapp-91c26.appspot.com",
      messagingSenderId: "710186340087",
      appId: "1:710186340087:web:e7227364bff806c7968df2"
    };
    
   firebase.initializeApp(firebaseConfig);
   username = localStorage.getItem("username");
   document.getElementById("username").innerHTML = "Welcome " + username + "!";

   //function AddRoom//
   function AddRoom(){
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding roomname"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
   }

   //function getData//
function getData() {
      firebase.database().ref("/").on('value',
       function(snapshot) 
       {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname = " + Room-Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML = row;

      });});}
getData();

//function redirectToRoomName//
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room name",name);
window.location = "kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("room name",room_name);
      localStorage.removeItem("user",username);
      window.location = "inde.html";
}