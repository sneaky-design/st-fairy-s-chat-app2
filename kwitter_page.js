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
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
   
      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
      
      document.getElementById("msg").value = "";
      }
      
      function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
               firebase_message_id = childKey;
               message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like= message_data['like'];
      // name_with_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
      // message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
      // like_button ="<button class = 'btn btn-warning' id ="+ firebase_message_id+"value="+like+"onclick= 'updateLike(this.id)'>";
      // span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
      
      // row = name_with_tag + message_with_tag + like_button + span_with_tag;
      row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";       

      document.getElementById("output").innerHTML += row;
      
      //End code
            } });  }); }
      getData();
      
      document.getElementById("msg").value = "";
      
      function updateLike(message_id)
      {
            console.log("clicked on like button -" + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            update_likes = Number(likes) + 1;
            console.log(update_likes);
      
            firebase.database().ref(room_name).child(message_id).update({
                  like: update_likes
            });
      }
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
  