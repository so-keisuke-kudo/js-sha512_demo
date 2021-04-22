import sha512 from 'js-sha512';

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('#hash').addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    document.querySelector('#result').innerHTML = `before: ${text}<br>after: ${sha512(text)}`;
  });
});
