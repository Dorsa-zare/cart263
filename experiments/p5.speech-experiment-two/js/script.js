/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `?`;

function preload() {
}

function setup() {
    createCanvas(500, 500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.Start();
}

function draw() {
    background(200, 50, 50);

    textAlign(CENTER, CENTER);
    textSize(30)
    text(currentSpeech, width / 2, height / 2);
}

function handleSpeechInput() {
    currentSpeech = speechRecognizer.resultString;
}