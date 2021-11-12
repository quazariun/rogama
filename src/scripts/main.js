import * as PIXI from '../libs/pixijs/pixi.mjs'

// Setup inicial
const app = new PIXI.Application({
	autoResize: true,
	backgroundColor: 0xd96200
});

function resize() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
}

document.body.appendChild(app.view);

// idle position
const frames = [];
for (let i = 0; i < 8; ++i) {
	frames.push(PIXI.Texture.from(`./src/sprites/water_goddess/01_idle/idle_${i + 1}.png`));
}

const anim = new PIXI.AnimatedSprite(frames);
anim.play();

app.stage.addChild(anim);


window.addEventListener('resize', resize);

// Core Loop
app.ticker.add(() => {
	anim.rotation += 0;
});

resize();

