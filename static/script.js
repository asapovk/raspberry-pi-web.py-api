
$(function(){
  var set1value = $('.set1value').val();
  var set2value = $('.set2value').val();

  var set1button = $('.set1button');
  var set2button = $('.set2button');
  var sendObject = {
    set1: 'foo',
    set2: 'bar'
  }
console.log(JSON.stringify(sendObject))

  set1button.on('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({set1: set1value, set2: set2value}));
    console.log(JSON.stringify(sendObject));
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
  });

  set2button.on('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({
      set1: set1value,
      set2: set2value
    }));
    console.log(JSON.stringify(sendObject));
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
  });


});
