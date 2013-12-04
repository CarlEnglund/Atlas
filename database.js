 /* $(document).ready(function() {
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
*/
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
    x: percent_width*30,
    y: percent_height*18,
    text: 'Atlas',
    fontSize: 55,
    fontFamily: 'Calibri',
    offsetX: (percent_width*50)/2,
    fill: 'White'
};

var text_meny_slogan_layout = {
    x: percent_width*51,
    y: percent_height*26,
    text: 'Världens roligaste kartspel!',
    fontSize: 30,
    fontFamily: 'Calibri',
    offsetX: (percent_width*50)/2,
    fill: 'Black'
};

var text_howto_info_layout = {
    x: percent_width*65,
    y: percent_height*35,
    text: 'Atlas spelas genom att man drar den röda \npinnen till det mål på kartan som svarar på \nfrågan. Tryck på nästaknappen i högra \nhörnet för att komma vidare till nästa fråga.',
    fontSize: percent_height*4,
    fontFamily: 'Calibri',
    offsetX: (percent_width*50)/2,
    fill: 'Black',
    visible: false
};

var text_about_info_layout = {
    x: percent_width*65,
    y: percent_height*35,
    text: 'Atlas har tagits fram som ett projekt i \nkursen TNM040.\nVi som arbetat med det här projektet \nheter Petra Öhlin, Mattias Palmgren, \nCarl Englund, Johan Henriksson och \nJohan Reimann.',
    fontSize: percent_height*4,
    fontFamily: 'Calibri',
    offsetX: (percent_width*50)/2,
    fill: 'Black',
    visible: false
};

var rect_start_btn_layout =  {
    x: percent_width*68,
    y: percent_height*66,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue'
};

var text_quest_start_btn_layout = {
    x: percent_width*68,
    y: percent_height*66,
    text:'Start',
    fontSize: percent_height*5,
    fontFamily: 'Calibri',
    fill: 'black' 
};

var rect_about_btn_layout =  {
    x: percent_width*32,
    y: percent_height*57,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue',
};

var text_about_btn_layout = {
    x: percent_width*32,
    y: percent_height*57,
    text:'Om Atlas',
    fontSize: percent_height*5,
    fontFamily: 'Calibri',
    fill: 'black' 
};

var rect_howto_btn_layout =  {
    x: percent_width*32,
    y: percent_height*42,
    width: percent_width*10,
    height: percent_height*10,
    offsetX:  (percent_width*10)/2,
    offsetY: (percent_height*10)/2,
    fill: 'lightblue',
};

var text_howto_btn_layout = {
    x: percent_width*32,
    y: percent_height*42,
    text:'Hjälp',
    fontSize:percent_height*5,
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
    fontSize: percent_height*2,
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
    y: percent_height*95,
    width: percent_width*7,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1,

};

var rect_quest_fill_layout1 = {
    x: percent_width*66,
    y: percent_height*95,
    width: percent_width*(7/5),
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1,

};

var rect_quest_fill_layout2 = {
    x: percent_width*66,
    y: percent_height*95,
    width: percent_width*(7/5)*2,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1

};

var rect_quest_fill_layout3 = {
    x: percent_width*66,
    y: percent_height*95,
    width: percent_width*(7/5)*3,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1

};

var rect_quest_fill_layout4 = {
    x: percent_width*66,
    y: percent_height*95,
    width: percent_width*(7/5)*4,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1

};

var rect_quest_fill_layout5 = {
    x: percent_width*66,
    y: percent_height*95,
    width: percent_width*(7/5)*5,
    height: percent_height*4,
    stroke: 'white',
    strokeWidth: 1,

};

var text_starTotal_layout = {
    x: percent_width*87,
    y: percent_height*93,
    text: 'x 0',
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

var star1_layout = {
      x: percent_width*64.5,
      y: percent_height*92,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star2_layout = {
      x: percent_width*67,
      y: percent_height*92,
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
var star3_layout = {
      x: percent_width*69.5,
      y: percent_height*92,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star4_layout = {
      x: percent_width*72,
      y: percent_height*92,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

var star5_layout = {
      x: percent_width*74.5,
      y: percent_height*92,
      numPoints: 5,
      innerRadius: percent_width*0.6,
      outerRadius: percent_width*1.2,
      fill: 0,
      stroke: 'white',
      strokeWidth: percent_width*0.1
};

