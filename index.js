
var num = document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
document.querySelectorAll("button")[i].addEventListener("click",function()
  {
  console.log(this.innerHTML);
  var exp = this.innerHTML;
  BtnAnimation(this.innerHTML);
  keypressed(exp);
});}
function keypressed(exp)
{
  switch (exp) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
        break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;


    default:

  }
}

document.addEventListener("keypress",function(event)
{ var key =event.key;
  keypressed(key);
  console.log(event.key);
  BtnAnimation(event.key);
});


function press(){
document.querySelector(".drum").classList.add(".pressed");}
function BtnAnimation(currentkey)
{
  var active = "."+currentkey;
  document.querySelector(active).classList.add("pressed");
  setTimeout(function () {
		document.querySelector(active).classList.remove("pressed");
	}, 100);
}
