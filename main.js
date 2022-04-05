import './style.css'

const text = '<strong>This text is important!</strong> skfdj slkfj sdkfj <strong>This text is important!</strong> skdfjsdkfj <strong>This text is important!</strong>';

document.querySelector('#app').innerHTML = `
  <h1>Highlight Strong Tags</h1>
<div class="text">${text}</div>
<button class="btnChange">Change Color of Strong Tags</button>
<div class="windowInfo">Resize to get window info.</div>
`;

const btnChangeElem = document.querySelector('.btnChange');
btnChangeElem.addEventListener('click', () => {
  const strongElems = document.querySelectorAll('strong');
  strongElems.forEach(m => {
    if (m.style.color !== 'red') {
      m.style.color = 'red'
    } else {
      m.style.color = 'black'
    }
  });
});

window.onresize = () => {
  const windowInfoElem = document.querySelector('.windowInfo');
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  windowInfoElem.innerHTML = `The window has a width of ${w}px and a height of ${h}px.`;
}


// ALTERNATIVE: solve this with: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
