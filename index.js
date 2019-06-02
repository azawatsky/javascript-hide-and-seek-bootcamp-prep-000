function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedChildren = document.querySelectorAll('ul.ranked-list li')
  for (let i=0;i<rankedChildren.length;i++) {
    rankedChildren[i].innerHTML = parseInt(rankedChildren[i].innerHTML)+n
  }
}

function deepestChild() {
  var current = document.querySelector('div#grand-node').querySelectorAll('div')
  var hold = 1
  while (current) {
    for (let i=0;)
  }
}