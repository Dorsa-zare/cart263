class GameStateDisplay {
    constructor(foodImage) {
        this.foodImage = foodImage;
        // Variable to store whether the cat can move
        this.canMove = true;

        // Array to store information about each door
        this.doors = [
            { x: width / 2 + 74, y: height / 2 - 83, width: 87, height: 15, isOpen: false },
            { x: width / 2 - 56, y: height / 2 + 120, width: 54, height: 15, isOpen: false },
            { x: width / 2 - 157, y: height / 2 - 43, width: 73, height: 15, isOpen: false }
        ];
        // Variable to store the index of the door close to the cat
        this.closeDoorIndex = -1;

        // Variable to store whether the user has said "open the door"
        this.openDoorCommand = false;


        // Array to store maze lines
        this.mazeLines = [
            { startX: 185, startY: 100, endX: 560, endY: 100 }, //Top frame
            { startX: 90, startY: 515, endX: 520, endY: 515 }, //Buttom frame
            { startX: 560, startY: 100, endX: 560, endY: 390 }, //Right frame
            { startX: 90, startY: 175, endX: 90, endY: 515 }, //Left frame

            { startX: 400, startY: 450, endX: 400, endY: 515 }, //Buttom lines
            { startX: 400, startY: 450, endX: 450, endY: 450 }, //Buttom lines

            { startX: 260, startY: 400, endX: 260, endY: 515 }, //Buttom lines
            { startX: 190, startY: 400, endX: 258, endY: 400 }, //Buttom lines
            { startX: 190, startY: 400, endX: 190, endY: 450 }, //Buttom lines

            { startX: 480, startY: 280, endX: 560, endY: 280 }, //Right lines
            { startX: 480, startY: 280, endX: 480, endY: 350 }, //Right lines
            { startX: 420, startY: 350, endX: 480, endY: 350 }, //Right lines

            { startX: 330, startY: 200, endX: 330, endY: 430 }, //Middle lines
            { startX: 330, startY: 200, endX: 390, endY: 200 }, //Middle lines
            { startX: 390, startY: 200, endX: 390, endY: 250 }, //Middle lines

            { startX: 250, startY: 100, endX: 250, endY: 240 }, //Top lines
            { startX: 490, startY: 100, endX: 490, endY: 170 }, //Top lines

            { startX: 90, startY: 230, endX: 160, endY: 230 }, //Left lines
            { startX: 160, startY: 230, endX: 160, endY: 330 }, //Left lines
            { startX: 160, startY: 330, endX: 330, endY: 330 }, //Left lines
        ];
    }


    display() {
        textSize(20);
        text(`Help Misoo find her food!`, width / 2, height / 2 - 220);
        // Display the cat food image and cat
        image(this.foodImage, width / 2 - 270, height / 2 - 220, 120, 120);
        cat.display();
        //Check for the cat to reach the food and transition into ending
        this.checkForEnding();
        // Draw maze lines
        this.drawMazeLines();
        // Draw the doors
        this.drawDoors();
        // Check if the cat is close to a closed door
        this.checkForCatDistanceToDoor();
    }


    checkForEnding() {
        // Calculate the distance between the center of the cat and the center of the food image
        let distance = dist(cat.catX + cat.catSize / 2, cat.catY + cat.catSize / 2, width / 2 - 150, height / 2 - 160);

        // Check if the distance is less than a certain threshold
        if (distance < 40) {
            currentState = "Ending"; // Transition to the ending state
        }
    }

    drawMazeLines() {
        // Draw maze lines
        stroke(0); // Set stroke color to black
        for (let i = 0; i < this.mazeLines.length; i++) {
            let currentLine = this.mazeLines[i];
            strokeWeight(4);
            line(currentLine.startX, currentLine.startY, currentLine.endX, currentLine.endY);
        }
        // Reset stroke weight to default for text
        strokeWeight(0.3);
    }

    drawDoors() {
        //Draw the brown doors in maze
        fill(142, 72, 25); // Brown color
        for (let i = 0; i < this.doors.length; i++) {
            let door = this.doors[i];
            if (!door.isOpen) {
                rect(door.x, door.y, door.width, door.height);
            }
        }
    }

    checkForCatDistanceToDoor() {
        // Check if the cat is close to a closed door
        this.closeDoorIndex = -1; // Reset the close door index
        for (let i = 0; i < this.doors.length; i++) {
            let door = this.doors[i];
            if (!door.isOpen && dist(cat.catX, cat.catY, door.x, door.y) < 40) {
                this.closeDoorIndex = i; // Set the close door index
            }
        }

        // Display text if the cat is close to a closed door
        if (this.closeDoorIndex !== -1) {
            fill(0);
            textAlign(CENTER);
            text("Say 'open the door'", width / 2, height / 2 - 195);
            this.canMove = false; // Prevent the cat from moving
        } else {
            this.canMove = true; // Allow the cat to move if not close to a closed door
        }
    }

    handleDirections(direction) {
        if (direction.toLowerCase().includes("open the door")) {
            // Open the door if the cat is close enough
            for (let i = 0; i < this.doors.length; i++) {
                let door = this.doors[i];
                if (!door.isOpen && dist(cat.catX, cat.catY, door.x, door.y) < 50) {
                    door.isOpen = true;
                    this.canMove = true; // Allow the cat to move after opening the door
                    console.log("Door opened");
                    break; // Exit the loop after opening the door
                }
            }
        } else if (!this.canMove) {
            console.log("Cat cannot move");
            return; // Exit the method if the cat cannot move
        } else {
            // move the cat based on the user's input
            console.log(direction.toLowerCase());

            if (direction.toLowerCase().includes("up")) {
                cat.moveCatImage(cat.moveAmount, 0); // Move down by the set amount
                cat.direction = 'down';
            } else if (direction.toLowerCase().includes("down")) {
                cat.moveCatImage(-cat.moveAmount, 0); // Move up by the set amount
                cat.direction = 'up';
            } else if (direction.toLowerCase().includes("left")) {
                cat.moveCatImage(0, cat.moveAmount); // Move right by the set amount
                cat.direction = 'right';
            } else if (direction.toLowerCase().includes("right")) {
                cat.moveCatImage(0, -cat.moveAmount); // Move left by the set amount
                cat.direction = 'left';
            }
        }
    }


}