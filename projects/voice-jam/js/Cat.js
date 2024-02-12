class Cat {
    constructor(catX, catY, moveAmount, catImage) {
        this.catX = catX;
        this.catY = catY;
        this.catSize = 70;
        this.moveAmount = moveAmount;
        this.catImage = catImage;
        this.direction = 'up';
        this.hit = false;

    }

    display() {
        // Display the cat image at the updated position
        image(this.catImage, this.catX, this.catY, this.catSize, this.catSize);
    }


    moveCatImage(yOffset, xOffset) {
        // Calculate the new position after movement
        let newX = this.catX + xOffset;
        let newY = this.catY + yOffset;

        // Check if the new position is within the canvas boundaries
        if (newX >= 0 && newX <= 650 - this.catSize && newY >= 0 && newY <= 550 - this.catSize) {
            // Check for collision with maze lines
            let blocked = false;
            for (let i = 0; i < game.mazeLines.length; i++) {
                let line = game.mazeLines[i];
                const hit = collideLineRect(line.startX, line.startY, line.endX, line.endY, newX, newY, this.catSize, this.catSize);
                if (hit) {
                    blocked = true;
                    break;
                }
            }
            // If not blocked by maze lines, update the cat's position
            if (!blocked) {
                this.catX = newX;
                this.catY = newY;
            }
        }
    }
}
