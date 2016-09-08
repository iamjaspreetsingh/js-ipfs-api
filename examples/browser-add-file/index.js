/* globals FileReader */
'use strict'

var ipfs = window.IpfsApi()

function store () {
  const file = document.getElementById('source').files[0]
  const reader = new FileReader()
  reader.onload = function () {
    var toStore = new Buffer(reader.result);
    ipfs.add(toStore, function (err, res) {
      if (err || !res) {
        return console.error('ipfs add error', err, res)
      }

      res.forEach(function (file) {
        console.log('successfully stored', file)
        display(file.path)
      })
    })
  }
  reader.readAsArrayBuffer(file)
}

function display (hash) {
  document.getElementById('hash').innerHTML =
    "<a href='http://localhost:8080/ipfs/"+hash+"'>"+hash+"</a>"
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('store').onclick = store
})
