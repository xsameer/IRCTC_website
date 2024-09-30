 function updateTimestamp() {
  const date = new Date();
  const timestampElement = document.getElementById("timestampAnchor");
  const formattedDate = `${date.getDate()}-${getMonthName(date.getMonth())}-${date.getFullYear()}`;
  const formattedTime = `[${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}:${padWithZero(date.getSeconds())}]`;

  if (timestampElement) {
      timestampElement.innerText = formattedDate + ' ' + formattedTime;
  }
}
function updateDateInput() {
  const date = new Date();
  const datefiller = document.getElementById("date");
  const formattedDateInput = `${date.getFullYear()}-${padWithZero(date.getMonth() + 1)}-${padWithZero(date.getDate())}`;
  
  if (datefiller) {
      datefiller.value = formattedDateInput;
  }
}

function padWithZero(num) {
  return num.toString().padStart(2, '0');
}
function getMonthName(monthIndex) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
}

updateTimestamp();
updateDateInput();

setInterval(updateTimestamp, 1000);


document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var scrollToTopButton = document.getElementsByClassName('gotopbtn')[0];

  if (scrollPosition > 900) {
      scrollToTopButton.style.display = 'block';
  } else {
      scrollToTopButton.style.display = 'none';
  }
});

window.onload = function() {
  document.getElementById('swapButton').addEventListener('click', function() {
      const fromInput = document.getElementById('from');
      const toInput = document.getElementById('to');
      const temp = fromInput.value;
      fromInput.value = toInput.value;
      toInput.value = temp;
  });
};

