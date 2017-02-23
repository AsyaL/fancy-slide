var listImg = [].slice.call(document.getElementsByTagName('img'), 0);
var listSrc = [];
var divWindow = document.createElement('div');
divWindow.id = 'window';
document.body.insertBefore(divWindow, document.body.firstChild);
var divWrap = document.createElement('div');
divWrap.id = 'wrap';
divWrap.setAttribute('onclick', 'show("none")');
document.body.insertBefore(divWrap, document.body.firstChild);
var imgClose = document.createElement('img');
imgClose.className = 'but_close';
imgClose.src = 'images/close.png';
imgClose.setAttribute('onclick', 'show("none")');
divWindow.appendChild(imgClose);
var butNext = document.createElement('img');
butNext.type = 'button';
butNext.src = 'images/next.png';
butNext.className = 'but_next';
butNext.setAttribute('onclick', 'nextImages()');
divWindow.appendChild(butNext);
var butBack = butNext.cloneNode(true);
butBack.src = 'images/back.png';
butBack.className = 'but_back';
butBack.setAttribute('onclick', 'backImages()');
divWindow.appendChild(butBack);
var imgInDiv = document.createElement('img');
imgInDiv.className = 'img_in_slider';
imgInDiv.src = '';
divWindow.appendChild(imgInDiv);

function callClickingSlider(index) {
  listImg[i].onclick = function() {
    show('block');
    imgInDiv.src = listSrc[index];
    next = listSrc.indexOf(listSrc[index]);
  };
}

for (var i = 0; i < listImg.length; i++) {
  listSrc[i] = listImg[i].src;
  var next;
  callClickingSlider(i);
}

function nextImages() {
  next++;
  if (next == listSrc.length) {
  next = 0;
  }
  imgInDiv.src = listSrc[next];
}

function backImages() {
  next = next - 1;
  if (next < 0) {
  next = listSrc.length - 1;
  }
  imgInDiv.src = listSrc[next];
}

function show(state) {
  document.getElementById('window').style.display = state;
  document.getElementById('wrap').style.display = state;
}