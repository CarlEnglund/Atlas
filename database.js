  /*$(document).ready(function() {
  $.ajax({
      url: 'database.php',
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
          callback(data);
          console.log(data);
          console.log("success");
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
      }
  });
  });

   function callback(arr)
  {
   array = arr;
   console.log(array);
  }*/

var percent_width = window.innerWidth/100;
var percent_height = window.innerHeight/100;

simpleText = {
    x: (window.innerHeight/100)*20,
    y: (window.innerHeight/100)*90,
    text: "lol",
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black'
       
};

var rect_meny_layout = {
    x: percent_width*50,
    y: percent_height*46,
    width: percent_width*50,
    height: percent_height*40,
    fill: 'white'

};

var text_quest_meny_layout = {
    x: percent_width*50,
    y: percent_height*40,
    text: 'Hallå där!',
    fontSize: percent_height*5,
    fontFamily: 'Calibri',
    fill: 'black'
};

var rect_start_btn_layout =  {
    x: percent_width*50,
    y: percent_height*50,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue'
};

var text_quest_start_btn_layout = {
    x: percent_width*50,
    y: percent_height*50,
    text:'Start',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'black' 
};

//Skapar variabel med cirkelns egenskaper 
//x: bestämmer startposition i x
//y: bestämmer startposition i y
//Radius: bestämmer radien
//Fill: bestämmer innerfärgen
//Stroke: bestämmer randfärgen
//Strokewidth: randstorlek
//draggable: true/false
//dragbounds: Vart man får dra den
var circleAnswer_layout = {
    x: ((window.innerWidth)/1920)*1108.6,
    y: ((window.innerHeight)/979)*351.6,
    radius: 1,
    fill: 'red',
    stroke: 'white',
    strokeWidth: 2,
    dragbounds: {
    left: window.innerWidth, right: window.innerHeight,
    },
  visible: false,
};

var text_quest_layout = {
    x: percent_width*20,
    y: percent_height*91,
    text: 'Författaren till klassikern "Brott och straff" är född \n i hans fosterlands huvudstad, vart ligger denna huvudstad?',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'white'     
};

var text_ans_layout = {
    x: percent_width*7,
    y: percent_height*92,
    text: 'Moskva',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'darkgray',
    visible: false    
};

var rect_next_layout = {
    x: percent_width*95,
    y: percent_height*94,
    width: percent_width*7,
    height: percent_height*7,
    fill: 'lightblue',
    visible: false
};

var text_next_btn_layout = {
    x: percent_width*95,
    y: percent_height*94,
    text: 'Nästa',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'black',
    visible: false				       
};

var rect_bar_layout = {
    x: 0,
    y: percent_height*89,
    width: percent_width*100,
    height: percent_height*13,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
    opacity: 0.5
};

var rect_quest_count_layout = {
    x: percent_width*66,
    y: percent_height*94,
    width: percent_width*7,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1,

};

var rect_quest_fill_layout = {
    x: percent_width*66,
    y: percent_height*94,
    width: 0,
    height: percent_height*4,
    fill: 'green',
    visible: false

};

var text_starTotal_layout = {
    x: percent_width*87,
    y: percent_height*93,
    text: 'x',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'white',
    visible: true                     
};

var starTotal_layout = {
      x: percent_width*85.7,
      y: percent_height*94.4,
      numPoints: 5,
      innerRadius: percent_width*0.5,
      outerRadius: percent_width*1,
      fill: '#dfbb00',
      //stroke: '#ffcb00',
      //strokeWidth: percent_width*0.1
};

var star_layout = {
      x: percent_width*66,
      y: percent_height*91,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

//------------ END-RUTA --------------

var rect_end_look_layout = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: percent_width*100, 
      height: percent_height*100,
      fill: 'black',
      opacity: 0.8

});

var rect_end_layout = {
    x: percent_width*50,
    y: percent_height*46,
    width: percent_width*50,
    height: percent_height*40,
    fill: 'white'

};

var text_quest_end_layout = {
    x: percent_width*50,
    y: percent_height*30,
    text: 'GRATULERAR',
    fontSize: percent_height*5,
    fontFamily: 'Calibri',
    fill: 'black'
};

var text_result_end_layout = {
    x: percent_width*50,
    y: percent_height*40,
    text: 'Du fick många poäng',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'black'
};


var rect_end_btn_layout =  {
    x: percent_width*50,
    y: percent_height*50,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue'
};


var text_end_btn_layout = {
    x: percent_width*50,
    y: percent_height*50,
    text:'Spela igen',
    fontSize: percent_height*3,
    fontFamily: 'Calibri',
    fill: 'black' 
};

//---------------------------------
