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
        const numSteps = 10;
        let newCatY = this.catY;
        let newCatX = this.catX;

        for (let step = 0; step < numSteps; step++) {
            const fraction = step / numSteps;
            newCatY = this.catY + yOffset * fraction;
            newCatX = this.catX + xOffset * fraction;

            console.log('New cat position:', newCatX, newCatY);

            for (let i = 0; i < game.mazeLines.length; i++) {
                this.hit = collideLineRect(game.mazeLines[i].startX, game.mazeLines[i].startY, game.mazeLines[i].endX, game.mazeLines[i].endY, this.catX, this.catY, this.catSize, this.catSize);
                if (this.hit) {
                    this.moveAmount = 0;
                }
            }
        }

        this.catY = constrain(newCatY, 0, height - 90);
        this.catX = constrain(newCatX, 0, width - 90);
    }


    handleDirections(direction) {
        // Check if the user said 'up', 'down', 'left', or 'right' to move the cat image
        console.log(direction.toLowerCase());

        if (direction.toLowerCase().includes("up")) {
            this.moveCatImage(this.moveAmount, 0); // Move down by the set amount
            this.direction = 'down';
        } else if (direction.toLowerCase().includes("down")) {
            this.moveCatImage(-this.moveAmount, 0); // Move up by the set amount
            this.direction = 'up';
        } else if (direction.toLowerCase().includes("left")) {
            this.moveCatImage(0, this.moveAmount); // Move right by the set amount
            this.direction = 'right';
        } else if (direction.toLowerCase().includes("right")) {
            this.moveCatImage(0, -this.moveAmount); // Move left by the set amount
            this.direction = 'left';
        }
    }
}