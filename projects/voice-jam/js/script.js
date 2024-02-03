/**
Voice Jam
Dorsa Zare

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = ''; // Declare the variable to hold speech input
let currentState = "Title"; // Initial state

let catImage; // Declare a variable to hold the cat image
let foodImage; // Declare a variable to hold the food image


function preload() {
    // Load the cat image 
    catImage = loadImage('assets/images/cat.jpg');
    // Load the cat food image 
    foodImage = loadImage('assets/images/catfood.jpg');
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

    // Title of the game
    textSize(36);
    text(`Help the cat find her food!`, width / 2, height / 2 - 200);

    // Instructions of the game
    textSize(16);
    text(`Remember, cats don't like to follow human commands.\nUse the wrong direction commands to guide the cat in the right direction.`, width / 2, height / 2 - 110);
    text("Say 'start' when you're ready!", width / 2, height / 2 + 200);

    // Display the cat image 
    image(catImage, width / 2 + 100, height / 2 - 50, 150, 150);
    // Display the cat food image 
    image(foodImage, width / 2 - 250, height / 2 - 50, 150, 150);


    // Check if the user said 'start' to transition to the next state
    if (currentSpeech.toLowerCase().includes("start")) {
        currentState = "Game";
    }
}


function displayGame() {
    // Game logic and display 
    textSize(20);
    text(`Help the cat find her food!`, width / 2, height / 2 - 220);

}

function displayEnding() {
    // Ending logic and display 
}


function handleSpeechInput() {
    // Handle speech input based on the current state
    if (currentState === "Title") {
        // Save the speech input to a variable
        currentSpeech = speechRecognizer.resultString;
    } else if (currentState === "Game") {
        // Handle game-related speech input
    } else if (currentState === "Ending") {
        // Handle ending-related speech input
    }
}