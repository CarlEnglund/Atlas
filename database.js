  $(document).ready(function() {
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
  }

var percent_width = window.innerWidth/100;
var percent_height = window.innerHeight/100;


var text_quest_number_layout = {
    x: percent_width*19,
    y: percent_height*93.1,
    text: "1.",
    fontSize: percent_height*3.5,
    fontFamily: 'Oxygen',
    fill: 'white'
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
    y: percent_height*21.5,
    text: 'A T L A S',
    fontSize: percent_height*13,
    fontFamily: 'Josefin Sans',
    fill: 'White'
};

var text_meny_slogan_layout = {
    x: percent_width*50,
    y: percent_height*29,
    text: ' ',
    fontSize: percent_height*2.5,
    fontFamily: 'Oxygen',
    fill: 'Black'
};

var text_howto_info_layout = {
    x: percent_width*65,
    y: percent_height*33,
    text: 'Atlas spelas genom att man drar den\nröda pinnen till det mål på kartan som\nsvarar på frågan. Tryck på nästaknappen\ni högra hörnet för att komma vidare till\nnästa fråga.',
    fontSize: percent_width*1.5,
    fontFamily: 'Oxygen',
    offsetX: (percent_width*50)/2,
    fill: 'Black',
    visible: false
};

var text_about_info_layout = {
    x: percent_width*65,
    y: percent_height*33,
    text: 'Atlas är ett roligt och lärande spel för \ndig som är nyfiken, strategisk och gillar\natt resa. Låt dig inspireras av spännande \nbilder och lär dig fakta om intressanta \nplatser.',
    fontSize: percent_width*1.5,
    fontFamily: 'Oxygen',
    offsetX: (percent_width*50)/2,
    fill: 'Black'
};

//Atlas har tagits fram som ett projekt i \nkursen TNM040.\nVi som arbetat med det här projektet \nheter Petra Öhlin, Mattias Palmgren, \nCarl Englund, Johan Henriksson och \nJohan Reimann.

var rect_start_btn_layout =  {
    x: percent_width*68,
    y: percent_height*66,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: '#79ce7b'
};

var text_quest_start_btn_layout = {
    x: percent_width*68,
    y: percent_height*66,
    text:'START',
    fontSize: percent_height*4,
    fontFamily: 'Oxygen',
    fill: 'black' 
};

var rect_about_btn_layout =  {
    x: percent_width*32,
    y: percent_height*38,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue',
};

var text_about_btn_layout = {
    x: percent_width*32,
    y: percent_height*38,
    text:'OM ATLAS',
    fontSize: percent_height*3,
    fontFamily: 'Oxygen',
    fill: 'black' 
};

var rect_howto_btn_layout =  {
    x: percent_width*32,
    y: percent_height*51,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: '79b2ce'
};

var text_howto_btn_layout = {
    x: percent_width*32,
    y: percent_height*51,
    text:'HJÄLP',
    fontSize:percent_height*3,
    fontFamily: 'Oxygen',
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
    x: percent_width*21,
    y: percent_height*94,
    text: ' ',
    fontSize: percent_height*2.5,
    fontFamily: 'Oxygen',
    fill: 'white'     
};

/*var text_ans_layout = {
    x: percent_width*7,
    y: percent_height*92,
    text: 'Moskva',
    fontSize: percent_height*3,
    fontFamily: 'Oxygen',
    fill: 'darkgray',
    visible: false    
};*/

var rect_next_layout = {
    x: percent_width*96,
    y: percent_height*94,
    width: percent_width*7,
    height: percent_height*7,
    fill: '#79ce7b',
    visible: false
};

var text_next_btn_layout = {
    x: percent_width*96,
    y: percent_height*94,
    text: 'NÄSTA',
    fontSize: percent_height*3,
    fontFamily: 'Oxygen',
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
    x: percent_width*3,
    y: percent_height*95,
    width: percent_width*7,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1,
};

var rect_quest_fill_layout1 = {
    x: percent_width*2,
    y: percent_height*95,
    width: percent_width*2,
    height: percent_height*2,
    stroke: 'white',
    strokeWidth: 1,
};

var rect_quest_fill_layout2 = {
    x: percent_width*5,
    y: percent_height*95,
    width: percent_width*2,
    height: percent_height*2,
    stroke: 'white',
    strokeWidth: 1
};

var rect_quest_fill_layout3 = {
    x: percent_width*8,
    y: percent_height*95,
    width: percent_width*2,
    height: percent_height*2,
    stroke: 'white',
    strokeWidth: 1
};

var rect_quest_fill_layout4 = {
    x: percent_width*11,
    y: percent_height*95,
    width: percent_width*2,
    height: percent_height*2,
    stroke: 'white',
    strokeWidth: 1
};

var rect_quest_fill_layout5 = {
    x: percent_width*14,
    y: percent_height*95,
    width: percent_width*2,
    height: percent_height*2,
    stroke: 'white',
    strokeWidth: 1,
};

var text_starTotal_layout = {
    x: percent_width*89,
    y: percent_height*93,
    text: 'x 0',
    fontSize: percent_height*3,
    fontFamily: 'Oxygen',
    fill: 'white',
    visible: true                     
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
    y: percent_height*34,
    text: 'GRATULERAR',
    fontSize: percent_height*5,
    fontFamily: 'Oxygen',
    fill: 'black'
};

var text_result_end_layout = {
    x: percent_width*50,
    y: percent_height*40,
    text: 'Du fick många poäng',
    fontSize: percent_height*3,
    fontFamily: 'Oxygen',
    fill: 'black'
};


var rect_end_btn_layout =  {
    x: percent_width*65,
    y: percent_height*66,
    width: percent_width*13 ,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: '#79ce7b'
};

var text_end_btn_layout = {
    x: percent_width*66.5,
    y: percent_height*66,
    text:'SPELA IGEN',
    fontSize: percent_width*2,
    fontFamily: 'Oxygen',
    fill: 'black' 
};

//---------------------------------
var starTotal_layout = {
      x: percent_width*87.7,
      y: percent_height*94.4,
      numPoints: 5,
      innerRadius: percent_width*0.5,
      outerRadius: percent_width*1,
      fill: 'white',
      //stroke: '#ffcb00',
      //strokeWidth: percent_width*0.1
};
var star1_layout = {
      x: percent_width*74,
      y: percent_height*94,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star2_layout = {
      x: percent_width*76.5,
      y: percent_height*94,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};
var star3_layout = {
      x: percent_width*79,
      y: percent_height*94,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star4_layout = {
      x: percent_width*81.5,
      y: percent_height*94,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star5_layout = {
      x: percent_width*84,
      y: percent_height*94,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};
