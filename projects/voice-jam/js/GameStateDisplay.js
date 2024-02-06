class GameStateDisplay {
    constructor(foodImage) {
        this.foodImage = foodImage;


        // Array to store maze lines
        this.mazeLines = [
            { startX: 170, startY: 100, endX: 550, endY: 100 }, //Top frame
            { startX: 120, startY: 500, endX: 520, endY: 500 }, //Buttom frame
            { startX: 550, startY: 100, endX: 550, endY: 400 }, //Right frame
            { startX: 120, startY: 170, endX: 120, endY: 500 }, //Left frame

            { startX: 400, startY: 440, endX: 400, endY: 500 }, //Buttom lines
            { startX: 400, startY: 440, endX: 460, endY: 440 }, //Buttom lines

            { startX: 260, startY: 400, endX: 260, endY: 500 }, //Buttom lines
            { startX: 190, startY: 400, endX: 258, endY: 400 }, //Buttom lines
            { startX: 190, startY: 400, endX: 190, endY: 450 }, //Buttom lines

            { startX: 470, startY: 280, endX: 550, endY: 280 }, //Right lines
            { startX: 470, startY: 280, endX: 470, endY: 350 }, //Right lines
            { startX: 410, startY: 350, endX: 470, endY: 350 }, //Right lines

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

        // Display cat
        cat.display();

        // Draw maze lines
        stroke(0); // Set stroke color to black
        for (let i = 0; i < this.mazeLines.length; i++) {
            let currentLine = this.mazeLines[i];
            strokeWeight(4);
            line(currentLine.startX, currentLine.startY, currentLine.endX, currentLine.endY);
        }
        // Reset stroke weight to default for text
        strokeWeight(0.5);
    }

}
