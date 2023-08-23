const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./shape');

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
        switch(shape) {
            case ("Circle"):
                var shape = new Circle(text, textColor, shapeColor);
                break;
            case ("Triangle"):
                var shape = new Triangle(text, textColor, shapeColor);
                break;
            case ("Square"):
                var shape = new Square(text, textColor, shapeColor);
                break;
        }

        console.log(shape);
      })
    }
}

module.exports = CLI