class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }

}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<rect x="150" y="100" width="160" height"160" points="fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182 fill="${this.shapeColor} />`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Square, Triangle };