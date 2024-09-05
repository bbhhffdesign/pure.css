const options = {
    particles:{
        number:{
            value:50
        },
        color: "#003399",
        links:{
            enable: false,
            distance: 30,
            color: "#003399",
        },
        move:{
            enable: true
        },
        size:{
            value:{min:1, max:50}
        },
        opacity: {
            value: 0.8
        }
     
    }
}

tsParticles.load("bgHero", options)