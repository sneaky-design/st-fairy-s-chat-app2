const firebaseConfig = {
      apiKey: "AIzaSyBX7Q4YtJx5h1b49pmPi1mdHUCF1mi-8Gw",
      authDomain: "kwitter-4744f.firebaseapp.com",
      databaseURL: "https://kwitter-4744f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4744f",
      storageBucket: "kwitter-4744f.appspot.com",
      messagingSenderId: "419475281382",
      appId: "1:419475281382:web:2c0f4172ca86c0138ef227",
      measurementId: "G-HJGCB2N4GY"
    };
        firebase.initializeApp(firebaseConfig);
    user_name =localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    function getData()
    { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
        console.log("Room Name - " + Room_names); 
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row; 
    }); }); }

getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
};
