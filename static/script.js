
$(function(){

  var set1button = $('.set1button');
  var set2button = $('.set2button');

  set1button.on('click', () => {
    var set1flower = $('#set1flower').val();
    var set2flower = $('#set2flower').val();

    var set1volume = $('#set1volume').val();
    var set2volume = $('#set2volume').val();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({pot: 1, flower: set1flower, volume: set1volume}));
    console.log(JSON.stringify({pot: 1, flower: set1flower, volume: set1volume}));
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
  });

  set2button.on('click', () => {
    var set1flower = $('#set1flower').val();
    var set2flower = $('#set2flower').val();

    var set1volume = $('#set1volume').val();
    var set2volume = $('#set2volume').val();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({pot: 2, flower: set2flower, volume: set2volume}));
    console.log(JSON.stringify({pot: 2, flower: set2flower, volume: set2volume}));
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
  });


});
