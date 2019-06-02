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
  var current = document.querySelector('div#grand-node')
  console.log(current)
  var hold = []
/*  
  for (let i=0;i<current.length;i++) {
    if (current) {
      return 'xxxxxx'
    }
    if (1>0) {
      
    }*/
}