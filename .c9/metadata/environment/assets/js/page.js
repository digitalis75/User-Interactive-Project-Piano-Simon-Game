{"filter":false,"title":"page.js","tooltip":"/assets/js/page.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":33,"column":1},"action":"remove","lines":["// header side panel","function openNav() {","    document.getElementById(\"mySidepanel\").style.width = \"150px\";","    }","","function closeNav() {","document.getElementById(\"mySidepanel\").style.width = \"0\";","}","","//how to play buttons","$(document).ready(function(){   ","    $('.how_piano').click(function(){","        $(this).toggleClass('how-active');","    });","","    $('.how_game').click(function(){","        $(this).toggleClass('how-active');","    });","});","","// canvas","var canvas = document.getElementById(\"demoCanvas\");  ","if (canvas.getContext)   ","{  ","var ctx = canvas.getContext(\"2d\");         ","var gradient = ctx.createLinearGradient(10, 0, 300, 0);","gradient.addColorStop(1 / 2, 'white');"," gradient.addColorStop(1, 'aquamarine');","ctx.fillStyle = gradient;  ","ctx.font = \"44px Roboto\";","ctx.strokeStyle = \"white\"; "," ctx.textAlign = \"center\";","ctx.fillText(\"Piano Game\", canvas.width/2, canvas.height/3*2);","}"],"id":5},{"start":{"row":0,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["// header side panel","function openNav() {","    document.getElementById(\"mySidepanel\").style.width = \"150px\";","}","","function closeNav() {","document.getElementById(\"mySidepanel\").style.width = \"0\";","}","","//how to play buttons","$(document).ready(function(){","    $(\".how_piano\").click(function(){","        $(this).toggleClass(\"how-active\");","    });","","    $(\".how_game\").click(function(){","        $(this).toggleClass(\"how-active\");","    });","});","","// canvas","var canvas = document.getElementById(\"demoCanvas\");","if(canvas.getContext){","var ctx = canvas.getContext(\"2d\");      ","var gradient = ctx.createLinearGradient(10, 0, 300, 0);","gradient.addColorStop(1 / 2, \"white\");","gradient.addColorStop(1, \"aquamarine\");","ctx.fillStyle = gradient;","ctx.font = \"44px Roboto\";","ctx.strokeStyle = \"white\";","ctx.textAlign = \"center\";","ctx.fillText(\"Piano Game\", canvas.width/2, canvas.height/3*2);","}"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":32,"column":1},"end":{"row":32,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1572866834927,"hash":"cb14a1e2438091a2f70c53c4d2e7f06554ef4941"}