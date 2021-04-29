const form = document.getElementById('form');
const contactInfo = document.getElementById('contact-info');
function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
}