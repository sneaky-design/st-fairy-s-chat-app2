function adduser(){
username=document.getElementById("username").Value;
firebase.database().ref("/").child(username).update(
{
    purpose:"adding user"
});
}