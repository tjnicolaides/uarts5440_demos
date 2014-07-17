{"changed":true,"filter":false,"title":"01-on-demo.js","tooltip":"/session-6/js/01-on-demo.js","ace":{"folds":[],"scrolltop":1081.5,"scrollleft":0,"selection":{"start":{"row":78,"column":9},"end":{"row":78,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":68,"state":"start","mode":"ace/mode/javascript"}},"value":"$(document).on('ready', function(){\n\t\n\tconsole.log('document is ready!');\n\t\n});\n\n$(document).ready(function() {\n\n\t// click / dblclick\n\t\n\t$('#clickme').on('click', function(evt){\n\t\tevt.preventDefault();\n\t\t\n\t\tvar href = $(this).attr('href');\n\t\t\n\t\tconsole.log('open this URL: ' + href + ' in a modal.');\n\t\tconsole.log('You just clicked #clickme!');\n\t\t// do some other stuff here\n\t});\n\t\n\t$('#clickmetoo').on('dblclick', function(evt){\n\t\tconsole.log('You just clicked #clickmetoo -- TWICE IN A ROW');\n\t\t// do some other stuff here\n\t});\n\t\n\t//$('#clickme').off('click');\n\t\n\t// keypress / keyup\n\t\n\t$('.keyup-detect').on('keyup', keyupFunction);\n\t$('.keypress-detect').on('keypress', keypressFunction);\n\t\n\t\n\t// change\n\t\n\t$('.change-detect').on('change', function() {\n\t\tconsole.log($(this).val());\t\n\t});\n\t\n\t// mouseenter / mouseleave AKA hover\n\t\n\t$('#hoverme').on('mouseenter', function(e) {\n\t\tconsole.log('hovering!');\n\t\t$(this).removeClass('btn-info');\n\t}).on('mouseleave', function(){\n\t\tconsole.log('not hovering');\n\t\t$(this).addClass('btn-info');\n\n\t});\n\t\n\t// submit\n\t$('form').on('submit', function(e) {\n\t\te.preventDefault();\n\t\tconsole.log(e);\t\n\t\tconsole.log('You just submitted a form!');\n\t});\n\t\n\t// resize\n\t\n\t$(window).on('resize', function(e){\n\t\t$('.window-size-value').text('Width: ' + $(window).width() + ', height: ' + $(window).height());\n\t});\n\t\n\t$('.window-size-value').text('Width: ' + $(window).width() + ', height: ' + $(window).height());\n\n\t// orientation \n\twindow.addEventListener('onorientationchange', doOnOrientationChange);\n\tdoOnOrientationChange();\n\n\t// HTML5\n\t$('#movie').on(\"play\",function(e){\n\t\tconsole.log('movie is playing');\n    }).on('pause', function(e) {\n\t    console.log('movie has been paused');\n    });\n\n});\n\nfunction doOnOrientationChange()\n  {\n    switch(window.orientation) \n    {  \n      case -90:\n      case 90:\n        console.log('landscape');\n        $('.window-orientation-value').text('Orientation is landscape mode');\n        break; \n      default:\n        console.log('portrait');\n        $('.window-orientation-value').text('Orientation is portrait mode');\n        break; \n    }\n  }\n  \nfunction keypressFunction() {\n\tvar val = $(this).val();\n\tconsole.log(val);\n}\n\nfunction keyupFunction() {\n\tvar val = $(this).val();\n\tconsole.log(val);\n}","undoManager":{"mark":0,"position":-1,"stack":[]},"timestamp":1404947926566}