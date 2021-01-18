// Namespace Object
const app = {};

// Initialize app
app.init = () => {
  // app.getWinners();
  // app.createCards();
  // app.mysteryQueen();
  app.category();
}

// get category
app.category = () => {
  $('#winners').click(function(){
    $('.clear').empty();
    app.getWinners();
  });
  $('#a1').click(function(){
    $('.clear').empty();
    app.getAs1();
  });
  $('#a2').click(function(){
    $('.clear').empty();
    app.getAs2();
  });
  $('#a3').click(function(){
    $('.clear').empty();
    app.getAs3();
  });
  $('#s5').click(function(){
    $('.clear').empty();
    app.getSeason5();
  });
  $('#s6').click(function(){
    $('.clear').empty();
    app.getSeason6();
  });
  $('#s7').click(function(){
    $('.clear').empty();
    app.getSeason7();
  });
  $('#s8').click(function(){
    $('.clear').empty();
    app.getSeason8();
  });
}

// Ajax call to get winners
app.getWinners = () => {

  $.ajax({
    url: 'https://www.nokeynoshade.party/api/queens/winners',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get All Star 1
app.getAs1 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/5/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get All Star 2
app.getAs2 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/10/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get All Star 3
app.getAs3 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/12/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get Season 5
app.getSeason5 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/6/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get Season 6
app.getSeason6 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/7/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get Season 7
app.getSeason7 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/8/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Ajax call to get Season 8
app.getSeason8 = () => {

  $.ajax({
    url: 'http://www.nokeynoshade.party/api/seasons/9/queens',
    dataType: 'JSON',
    method: 'GET',
  }).then(function(res){
    console.log(res);
    // to allow this function to use res
    app.createCards(res);
    app.mysteryQueen(res);
  })
}

// Create cards to append on page
app.createCards = (data) => {
  data.forEach((array)=> {
    $('ul').append(`
    <li>
      <img src=${array.image_url}/>
      <h3>${array.name}</h3>
    </li>
    `)
    console.log(array);
  });

  // blur the card when clicked
  $('li').click(function(){
    console.log(this);
    $(this).addClass('blurred')
  })
}

// Get mystery queen
app.mysteryQueen = (data) => {
  const num = Math.floor(Math.random()* data.length)
  console.log(num)
  $('.mysteryQueen').append(`
  <h2>The Mystery Queen: ${data[num].name}</h2>
  <img src=${data[num].image_url} />
  `)
}

// Document Ready
$(document).ready(function(){
  app.init();
})