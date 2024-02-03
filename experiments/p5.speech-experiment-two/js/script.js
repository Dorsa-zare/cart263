/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechSynthesizer = new p5.Speech();

let showSubtitle = false;
let toSay = `I'm going to find you!`;

function preload() {
}

function setup() {
    createCanvas(500, 500);

    // Synthesis settings
    speechSynthesizer.setPitch(0.2);
    speechSynthesizer.setRate(0.5);
    speechSynthesizer.setVoice(`Google UK English Male`)

    speechSynthesizer.onStart = speechStarted;
    speechSynthesizer.onEnd = speechEnded;

    console.log(speechSynthesizer.listVoices());
}

function draw() {
    background(200, 50, 50);

    if (showSubtitle) {
        textSize(36);
        text(toSay, 50, 150);
    }
}

function mousePressed() {
    // say something!
    speechSynthesizer.speak(toSay)
}

function speechStarted() {
    showSubtitle = true;
}

function speechEnded() {
    showSubtitle = false;
}