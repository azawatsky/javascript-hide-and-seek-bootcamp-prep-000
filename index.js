function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedChildren = document.querySelectorAll('ul.ranked-list li')
  for (let i=0;i<rankedChildren.length;i++) {
    rankedChildren[i].innerHTML = (i++).toString()
  }
}