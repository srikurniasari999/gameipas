function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65Ntqz3oPJT":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

