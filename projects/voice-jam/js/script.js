/**
Voice Jam
Dorsa Zare

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentState = "Title"; // Initial state

function preload() {
}

function setup() {
    createCanvas(650, 550);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.start();
}

function draw() {
    background(150, 200, 150);
    textAlign(CENTER, CENTER);
    textSize(18);

    // Check the current state
    if (currentState === "Title") {
        displayTitle();
    } else if (currentState === "Game") {
        displayGame();
    } else if (currentState === "Ending") {
        displayEnding();
    }
}


function displayTitle() {
    text(`Help the cat find her food!\nRemember, cats don't like to follow human commands.\nUse the wrong direction commands to guide the cat in the right direction.`, width / 2, height / 2 - 110);

    // Text for starting the game
    textSize(16);
    text("Say 'start' when you're ready!", width / 2, height / 2 + 50);

    // Check if the user said 'start' to transition to the next state
    if (currentSpeech.toLowerCase().includes("start")) {
        currentState = "Game";
    }
}

function handleSpeechInput() {
    backgroundColor = speechRecognizer.resultString;

}