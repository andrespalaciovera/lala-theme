// Put your application javascript here
let slider = tns({
    container : ".my-slider",
    "loop": false,
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer : "#controls",
    prevButton : ".previus",
    nextButton : ".next",
    responsive : {
        1600 : {
            items : 4,
            gutter : 10
        },
        1024 : {
            items : 4,
            gutter : 10
        },
        768 : {
            items : 3,
            gutter :10
        },
        480 : {
            items : 1
        }
    }
})