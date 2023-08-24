const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./shape');
const { writeFile } = require('fs/promises');
const {createSVG} = require('./createSVG');

class CLI {

    run() {
        return inquirer
      .prompt([
        {
            type: "input", 
            name: "text",
            message: "Enter text (up to three characters): "
        },
        {
            type: "input", 
            name: "textColor",
            message: "Enter text color (keyword or hexidecimal): "
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape: ",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Choose shape color (keyword or hexidecimal): "
        }
      ]).then(({text, textColor, shapeColor, shape}) => {
        if (text.length > 3) {
            console.error("Text must be less than or equal to 3 characters in length.");
            return;
        }

        switch(shape) {
            case ("Circle"):
                var newShape = new Circle(text, textColor, shapeColor);
                break;
            case ("Triangle"):
                var newShape = new Triangle(text, textColor, shapeColor);
                break;
            case ("Square"):
                var newShape = new Square(text, textColor, shapeColor);
                break;
        }
        
        let render = createSVG(textColor, text, newShape.render())

        writeFile('logo.svg', render).then(() => {
            console.log("Generated logo.svg")
        })
      })
    }
}

module.exports = CLI