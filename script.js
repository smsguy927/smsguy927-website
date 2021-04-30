
document.getElementById("info-quiz").onsubmit = function () {
  const contactInfo = document.getElementById('contact-info');
  const infoAnswer = 'poker';
  let userText = document.infoQuiz.kWord.value;
  alert(userText);
  if (userText == infoAnswer) {
    alert("hello");
    contactInfo.removeAttribute('hidden');

  }
  else {
    location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
  return false;
}