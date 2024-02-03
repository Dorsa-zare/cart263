"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = ''; // Declare the variable to hold speech input
let currentState = "Title"; // Initial state

let catImage; // Declare a variable to hold the cat image
let foodImage; // Declare a variable to hold the food image
let catY; // Declare the variable for the cat's y-coordinate
let catX; // Declare the variable for the cat's x-coordinate

let moveAmount = 20; // Set the initial movement amount
let gameStateDisplay;


function preload() {
    // Load the cat image 
    catImage = loadImage('assets/images/cat.png');
    // Load the cat food image 
    foodImage = loadImage('assets/images/catfood.png');
    // Load the cat food image 
    happyCatImage = loadImage('assets/images/happycat.png');
}


function setup() {
    createCanvas(650, 550);
    catY = height / 2 + 150; // Initialize the cat's y-coordinate
    catX = width / 2 + 200; // Initialize the cat's x-coordinate

    // Create an instance of the GameStateDisplay class
    gameStateDisplay = new GameStateDisplay(catImage, foodImage, catX, catY, moveAmount);

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
    image(catImage, width / 2 + 100, height / 2 - 50, 200, 200);
    // Display the cat food image 
    image(foodImage, width / 2 - 270, height / 2, 200, 200);

    // Check if the user said 'start' to transition to the next state
    if (currentSpeech.toLowerCase().includes("start")) {
        currentState = "Game";
    }
}

function displayGame() {
    // Game logic and display using the GameStateDisplay class
    gameStateDisplay.display();
}


function moveCatImage(yOffset, xOffset) {
    // Adjust the y-coordinate and x-coordinate of the cat image
    catY += yOffset;
    catX += xOffset;

    // Ensure the cat stays within the canvas bounds
    catY = constrain(catY, 0, height - 90);
    catX = constrain(catX, 0, width - 90);
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
        gameStateDisplay.handleDirections(speechRecognizer.resultString);
    } else if (currentState === "Ending") {
    }
}