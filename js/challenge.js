let timer = document.querySelector('#counter');
let sec = 0;
let interValid = setInterval(incrementalAdd, 1000);

document.addEventListener('DOMContentLoaded', event => {
  document.querySelector('#plus').addEventListener('click',incrementalAdd);
  document.querySelector('#minus').addEventListener('click',incrementalSub);
  document.querySelector('#heart').addEventListener('click',likeNumbers);
  document.querySelector('#pause').addEventListener('click',pauseTimer);
  document.querySelector('#comment-form').addEventListener('submit',leaveComments);
})

//Add user comments to the DOM
function leaveComments(event) {
  event.preventDefault();
  let commentText = document.querySelector('#comment-input').value;
  let commentList = document.createElement('li');
  let list = document.querySelector('#list');
  let form = document.querySelector('#comment-form');
  commentList.textContent = `${commentText}`;
  list.appendChild(commentList);
  form.reset();
}

//Add 1 second to the timer when plus button is clicked
function incrementalAdd() {
  sec +=1
  timer.textContent = sec;
}

//Subtract 1 second from the timer when minus button is clicked
function incrementalSub() {
  sec -=1;
  timer.textContent = sec;
}

//Track the number of 'likes' each number in the counter receives
function likeNumbers() {
  let countHeartButtonClicks = 0;
  let counter = document.querySelector('#counter').textContent;
  let list = document.createElement('li');

  countHeartButtonClicks +=1;
  list.textContent = `${counter} has been liked ${countHeartButtonClicks} time`;
  document.querySelector('.likes').appendChild(list);
}

//Add the ability to pause and resume the timer
function pauseTimer(event) {
  let e = event.target;
  if (e.innerText === 'pause') {
    clearInterval(interValid);
    e.textContent = 'resume';
    document.querySelector('#plus').disabled = true;
    document.querySelector('#minus').disabled = true;
    document.querySelector('#heart').disabled = true;
  } else {
    interValid = setInterval(incrementalAdd, 1000);
    e.textContent = 'pause';
    document.querySelector('#plus').disabled = false;
    document.querySelector('#minus').disabled = false;
    document.querySelector('#heart').disabled = false;
  }
}


