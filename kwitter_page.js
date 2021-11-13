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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         function Logout(){
            localStorage.removeItem("room name",room_name);
            localStorage.removeItem("user",username);
      
            window.location = "index.html";
      }
      } });  }); }
getData();
function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });
      document.getElementById("msg").value = "";
}