class GameStateDisplay {
    constructor(catImage, foodImage, catX, catY, moveAmount) {
        this.catImage = catImage;
        this.foodImage = foodImage;
        this.catX = catX;
        this.catY = catY;
        this.moveAmount = moveAmount;
    }


    display() {
        textSize(20);
        text(`Help the cat find her food!`, width / 2, height / 2 - 220);

        // Display the cat food image 
        image(this.foodImage, width / 2 - 270, height / 2 - 220, 120, 120);

        // Display the cat image at the updated position
        image(this.catImage, this.catX, this.catY, 90, 90);
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
