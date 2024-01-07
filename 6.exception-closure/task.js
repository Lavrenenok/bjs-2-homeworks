function parseCount(value) {
   let parsedValue = Number.parseFloat(value);
   if (isNaN(parsedValue)) {
      throw new Error('Невалидное значение');
   }
   return parsedValue;
}

function validateCount(value) {
   try {
      return parseCount(value);
   } catch (error) {
      return error;
   }
}

class Triangle {
   constructor(side1, side2, side3) {
      if (!this.isValidTriangle(side1, side2, side3)) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
   }

   isValidTriangle(a, b, c) {
      return a + b > c && b + c > a && c + a > b;
   }

   get perimeter() {
      return this.side1 + this.side2 + this.side3;
   }

   get area() {
      const s = this.perimeter / 2;
      const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
      return parseFloat(area.toFixed(3));
   }
}

function getTriangle(side1, side2, side3) {
   try {
      const triangle = new Triangle(side1, side2, side3);
      return triangle;
   } catch (error) {
      return {
         perimeter: () => 'Ошибка! Треугольник не существует',
         area: () => 'Ошибка! Треугольник не существует',
      };
   }
}
