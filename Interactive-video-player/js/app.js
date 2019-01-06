// Delcare variables

var videoCaptions = document.getElementById('myVideo');
var captionsHighlight = document.querySelector('.interactiveCaptions');

// Creating an empty new array to get the span tagname

var captions = []
var a = document.getElementsByTagName('span')

// "a" is the new array and I'm pushing the new properties (el, start, end) to this array

Array.from(a).forEach((el) => {
    captions.push({
        el: el,
        start: el.getAttribute('data-start'),
        end: el.getAttribute('data-end')
    })
})

// Event listener for the timeupdate 

videoCaptions.addEventListener('timeupdate', function() {

// Adding the currentTime property to my variable so it gets the current time of the video

    var captionTime = videoCaptions.currentTime;

// Creating a for loop for the array we created "captions"   

    for(let i = 0; i < captions.length; i++) {
        
// Creating a new variable for the captions array with the property of "el" 

        var captionText = captions[i].el;

// If the time is greater than or equal too the array and start property (data-start) && (data-end)
// the new variable we created will highlight el properties from data-start/data-end ELSE it wont
// Also highlight is coming from the css

        if (captionTime >= captions[i].start && captionTime < captions[i].end) {
            captionText.className = "highlight";
        } else {
            captionText.className = '';
        }
    }
})

// Adding an event listener to the variable we created to respond if we click on any span tag it goes to that spot and plays the video at that current time

captionsHighlight.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        captions.forEach(function(caption) {
            if (e.target === caption.el) {
                videoCaptions.currentTime = caption.start;
            }
        });
    }
});
