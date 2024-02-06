/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechRecognizer = new p5.SpeechRec();
let backgroundColor = `black`;

function preload() {
}

function setup() {
    createCanvas(550, 550);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.start();
}

function draw() {
    background(backgroundColor);
    textAlign(CENTER, CENTER);
    textSize(30)
    text(`Say turn the lights lights on or off`, width / 2, height / 3);

    text(currentSpeech, width / 2, height / 2);
}

function handleSpeechInput() {
    backgroundColor = speechRecognizer.resultString;

}