
    
        function getRandColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Component to change to random color on click.
        AFRAME.registerComponent('cursor-listener', {
            init: function() {
                this.el.addEventListener('click', function(evt) {
                    //this.setAttribute('material', 'color', getRandColor());
                    console.log('I was clicked at: ', evt.detail.intersection.point);
                });
                this.el.addEventListener('mouseenter', function(evt) {
                    //this.setAttribute('material', 'opacity', 0.8);
                });
                this.el.addEventListener('mouseleave', function(evt) {
                    //this.setAttribute('material', 'opacity', 1.0);
                });
            },
            update: function() {},
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        });
      
      
    
    
      AFRAME.registerComponent('model-monitor', {
            init: function() {
                  this.el.addEventListener('model-loaded', function () {
                  console.log(el);
                    console.log("model was loaded");
                });
            },
            update: function() {},
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        });
      
      
    
    
      // Component to change to random color on click.
        AFRAME.registerComponent('dna-wall-listener', {
            init: function() {
                this.el.addEventListener('click', function(evt) {
                    //this.setAttribute('material', 'color', getRandColor());
                    console.log('I was clicked at: ', evt.detail.intersection.point);
                  console.log(evt);
                  console.log(this.data);
                    var id = "#billboard_"+evt.srcElement.attributes["dna-wall-listener"].nodeValue+"_answer";
                    var el = document.querySelector(id);
                    el.setAttribute("visible",true);
                    console.log("made visible");
                });
                this.el.addEventListener('mouseenter', function(evt) {
                    this.setAttribute('material', 'opacity', 0.5);
                    console.log("mouse enter");
                    console.log(evt);
                    console.log(this.data);
                    var hide1 = "#billboard_whyEC_answer";
                    var hide2 = "#billboard_defineDNA_answer";
                    var hide3 = "#billboard_elijah_answer";
                    var el1 = document.querySelector(hide1);
                    var el2 = document.querySelector(hide2);
                    var el3 = document.querySelector(hide3);
                    el1.setAttribute("visible",false);
                    el2.setAttribute("visible",false);
                    el3.setAttribute("visible",false);
                    console.log("#billboard_"+evt.srcElement.attributes["dna-wall-listener"].nodeValue+"_answer")
                    var id = "#billboard_"+evt.srcElement.attributes["dna-wall-listener"].nodeValue+"_answer";
                    var el = document.querySelector(id);
                    el.setAttribute("visible",true);
                    console.log("made visible");

                });
                this.el.addEventListener('mouseleave', function(evt) {
                    this.setAttribute('material', 'opacity', 1.0);
                    console.log("mouse leave");
                    console.log(evt);
                });
            },
            update: function() {},
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        });
     
  
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    
  var validTopics = ["Pattern",
"Worship",
"Ascend",
"Sight",
"Sanctuary",
"Instruction",
"Prayer",
"Access",
"Obedience",
"Attention",
"Divine",
"Righteousness",
"Truth",
"Light",
"Exactness ",
"Spirit"];
  var allTopics = ["Pattern",
"Worship",
"Ascend",
"Sight",
"Sanctuary",
"Instruction",
"Prayer",
"Access",
"Obedience",
"Attention",
"Divine",
"Righteousness",
"Truth",
"Light",
"Exactness ",
"Spirit",
"Paint",
"Microphone",
"Glove",
"Chair",
"Cable",
"Sink",
"Wheel",
"Tape",
"Lunch",
"Poster",
"Scissors",
"Grass",
"Matchstick",
"Video",
"Marker",
"Jersey"];
  
    
      
      AFRAME.registerComponent('word-finder', {
            init: function() {
                  this.el.addEventListener('model-loaded', function () {
                  console.log(el);
                    console.log("model was loaded");
                });
                this.el.addEventListener('mouseenter', function (evt) {
                  console.log("ENTER");
                  var word = this.getAttribute("data-text");
                  if (validTopics.indexOf(word) > -1)
                  {
                    var opacity = 0.8;
                    //this.setAttribute("text", "color: "+getRandColor()+"; opacity: 0.8; value: "+word);
                    this.setAttribute("material", "color: "+getRandColor()+"; opacity: "+ opacity);
                    this.setAttribute("text-geometry", "font: #optimerBoldFont; value: "+ word);
                  }
                  else
                  {
//<a-animation attribute="position" to="0 2.2 -5" direction="alternate" dur="2000"
//repeat="indefinite"></a-animation>
                    //this.setAttribute("text", "color: blue; opacity: 0.8; value: ");
                    this.setAttribute("material", "color: blue;");
                    this.setAttribute("text-geometry", "font: #optimerBoldFont; opacity: "
                                            +opacity+"; value: ");
                    this.setAttribute("data-text", "");
                    var hideAnimation = document.createElement('a-animation');
                    hideAnimation.setAttribute("attribute", "opacity");
                    hideAnimation.setAttribute("to", "0");
                    hideAnimation.setAttribute("dur","5000");
                    //this.appendChild(hideAnimation);
                  }
                });
          this.el.addEventListener('mouseleave', function (evt) {
                              console.log("LEAVE: "+this.getAttribute("data-text"));
              if (this.getAttribute("data-text") === "")
              {
                var opacity = 0.5;
                var nextWord= allTopics[getRandomInt(0, allTopics.length-1)];
                this.setAttribute("data-text", nextWord);
                this.setAttribute("material", "color: blue; opacity: "+ opacity);
                this.setAttribute("text-geometry", 
                                  "font: #optimerBoldFont; value: "+nextWord);

                //this.setAttribute("text", "color: blue; opacity: 0.8; value: "+nextWord);
              }

          });

            },
            update: function() {},
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        });
      
      AFRAME.registerComponent('south-wall-blocks', {
      schema: {},
      init: function () {
        var southPlane = document.getElementById("plane-south");
        var alreadyUsed = [];
        var positions = ["0 2 0", "-4 2 0", "4 2 0", "0 4 0", "-4 4 0", "4 4 0", "-4 0 0", "0 0 0", "4 0 0"];
        var opacity = "0.3";
        for (var i =0;i<positions.length;i++)
          {
            
            var nextWord = allTopics[getRandomInt(0, allTopics.length-1)];
            while (alreadyUsed.indexOf(nextWord) > -1)
              nextWord = allTopics[getRandomInt(12, allTopics.length-1)];

            var scale = "1";
            scale = scale + " " + scale + " " + scale;
            var id=i+"WordBlock";
           
            var wall_image = document.createElement('a-entity');
            wall_image.setAttribute("word-finder", i);
            wall_image.setAttribute("id", id);
            wall_image.setAttribute("position", positions[i]);
            wall_image.setAttribute("scale",scale)
            //wall_image.setAttribute("opacity",opacity);
            wall_image.setAttribute("material", "color: blue; opacity: "+ opacity);
            
            wall_image.setAttribute("text-geometry", "font: #optimerBoldFont; value: "+nextWord);
            //wall_image.setAttribute("text", "color: blue; opacity: "+opacity+"; value: "+nextWord);
            wall_image.setAttribute("data-text", nextWord);
            
            southPlane.appendChild(wall_image);
            //wall_image_panel.addChild(wall_image);

            
            //wall_image.setAttribute("word-finder", i);
            //wall_image.setAttribute("id", id);
            //wall_image.setAttribute("position", positions[i]);
            //wall_image.setAttribute("scale",scale)
            //wall_image.setAttribute("opacity",opacity);
            //wall_image.setAttribute("material", "color: blue; opacity: "+ opacity);
            //wall_image.setAttribute("text-geometry", "font: #optimerBoldFont; value: "+nextWord);
            //wall_image.setAttribute("text", "color: blue; opacity: "+opacity+"; value: "+nextWord);
            //wall_image.setAttribute("data-text", nextWord)

            //wall_image.setAttribute("geometry","primitive: box");
            //var wall_image_panel = document.createElement('a-plane');
            //wall_image_panel.setAttribute('height', 10)
            //wall_image_panel.setAttribute('width', 10);
            //wall_image_panel.setAttribute('material', "color:red");
            //wall_image_panel.appendChild(wall_image);


            //console.log(southPlane);
          }
      },
      update: function () {},
      tick: function () {},
      remove: function () {},
      pause: function () {},
      play: function () {}
      });
    