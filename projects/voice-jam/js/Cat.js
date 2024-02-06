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
  
        let blocked = false;
        for (let i = 0; i < game.mazeLines.length; i++) {
          let line = game.mazeLines[i];
          const hit = collideLineRect(line.startX, line.startY, line.endX, line.endY, this.catX + xOffset, this.catY + yOffset, this.catSize, this.catSize);
          if (hit) {
            blocked = true;
            break;
          }
        }
        
        if (!blocked) {
          this.catX += xOffset;
          this.catY += yOffset;
        }
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