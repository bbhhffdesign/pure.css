const heroTextScram_1 = document.getElementById("hero-text-scram-1");
const heroTextScram_2 = document.getElementById("hero-text-scram-2");
const heroTextNoScram_1 = document.getElementById("hero-text-noscram-1");
const heroTextNoScram_2 = document.getElementById("hero-text-noscram-2");

var scrambleText_1 = new ScrambleText(
	heroTextScram_1,
	{
		timeOffset : 300,
	}
).stop();

var scrambleText_2 = new ScrambleText(
	heroTextScram_2,
	{
		timeOffset : 300,
	}
).stop();

let tl_hero = gsap.timeline();

tl_hero
    .add( ()=> scrambleText_1.play().start())
    .add( ()=> scrambleText_2.play().start())
    .from(heroTextNoScram_1, {delay: 4,duration:.1, opacity:0})
    .from(heroTextNoScram_2, {duration:.1, opacity:0},"<")