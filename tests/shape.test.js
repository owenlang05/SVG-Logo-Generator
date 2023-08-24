const {Circle, Triangle, Square} = require('../lib/shape');

describe('Shapes', () => {

    describe('Triangle', () => {
        it('should return an SVG snippet of code for a triangle', () => {
            const triangle = new Triangle();
            triangle.setShapeColor('blue')
            expect(() => triangle.render().toEqual('<polygon points="150, 18 244, 182 56, 182 fill="blue" />'))
        }
        )})

    describe('Circles', () => {
        it('should return an SVG snippet of code for a circle', () => {
            const circle = new Circle();
            circle.setShapeColor('green')
            expect(() => circle.render().toEqual('<circle cx="150" cy="100" r="80" fill="green" />'))
        }
    )})

    describe('Square', () => {
        it('should return an SVG snippet of code for a square', () => {
            const square = new Square();
            square.setShapeColor('black')
            expect(() => square.render().toEqual('<rect x="150" y="100" width="160" height"160" points="fill="black" />'))
        }
    )})
})