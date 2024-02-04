class GameStateDisplay {
    constructor(catImage, foodImage, catX, catY, moveAmount) {
        this.catImage = catImage;
        this.foodImage = foodImage;
        this.catX = catX;
        this.catY = catY;
        this.moveAmount = moveAmount;


        // Array to store maze lines
        this.mazeLines = [
            { startX: 170, startY: 100, endX: 550, endY: 100 }, //Top frame
            { startX: 120, startY: 500, endX: 520, endY: 500 }, //Buttom frame
            { startX: 550, startY: 100, endX: 550, endY: 400 }, //Right frame
            { startX: 120, startY: 500, endX: 120, endY: 170 }, //Left frame


            { startX: 400, startY: 440, endX: 400, endY: 500 }, //Buttom lines
            { startX: 400, startY: 440, endX: 460, endY: 440 }, //Buttom lines

            { startX: 260, startY: 400, endX: 260, endY: 500 }, //Buttom lines
            { startX: 190, startY: 400, endX: 258, endY: 400 }, //Buttom lines
            { startX: 190, startY: 400, endX: 190, endY: 450 }, //Buttom lines

            { startX: 470, startY: 280, endX: 550, endY: 280 }, //Right lines
            { startX: 470, startY: 280, endX: 470, endY: 350 }, //Right lines
            { startX: 410, startY: 350, endX: 470, endY: 350 }, //Buttom lines

            { startX: 330, startY: 180, endX: 330, endY: 430 }, //Middle lines
            { startX: 330, startY: 180, endX: 400, endY: 180 }, //Middle lines
            { startX: 400, startY: 180, endX: 400, endY: 270 }, //Middle lines

            { startX: 260, startY: 100, endX: 260, endY: 270 }, //Top lines
            { startX: 470, startY: 100, endX: 470, endY: 200 }, //Top lines

            { startX: 120, startY: 220, endX: 180, endY: 220 }, //Left lines
            { startX: 180, startY: 220, endX: 180, endY: 330 }, //Left lines
            { startX: 180, startY: 330, endX: 330, endY: 330 }, //Left lines

        ];
    }


    display() {
        textSize(20);
        text(`Help the cat find her food!`, width / 2, height / 2 - 220);

        // Display the cat food image 
        image(this.foodImage, width / 2 - 270, height / 2 - 220, 120, 120);

        // Display the cat image at the updated position
        image(this.catImage, this.catX, this.catY, 70, 70);


        // Draw maze lines
        stroke(0); // Set stroke color to black
        for (let i = 0; i < this.mazeLines.length; i++) {
            let currentLine = this.mazeLines[i];
            strokeWeight(3);
            line(currentLine.startX, currentLine.startY, currentLine.endX, currentLine.endY);
        }

        // Reset stroke weight to default for text
        strokeWeight(0.5);

    }


    moveCatImage(yOffset, xOffset) {
        // Adjust the y-coordinate and x-coordinate of the cat image
        this.catY += yOffset;
        this.catX += xOffset;

        // Ensure the cat stays within the canvas bounds
        this.catY = constrain(this.catY, 0, height - 90);
        this.catX = constrain(this.catX, 0, width - 90);
    }


    handleDirections(direction) {
        // Check if the user said 'up', 'down', 'left', or 'right' to move the cat image
        console.log(direction.toLowerCase());

        if (direction.toLowerCase().includes("up")) {
            this.moveCatImage(this.moveAmount, 0); // Move down by the set amount
        } else if (direction.toLowerCase().includes("down")) {
            this.moveCatImage(-this.moveAmount, 0); // Move up by the set amount
        } else if (direction.toLowerCase().includes("left")) {
            this.moveCatImage(0, this.moveAmount); // Move right by the set amount
        } else if (direction.toLowerCase().includes("right")) {
            this.moveCatImage(0, -this.moveAmount); // Move left by the set amount
        }
    }
}