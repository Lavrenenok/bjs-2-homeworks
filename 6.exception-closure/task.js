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
   constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
         throw new Error('Треугольник с такими сторонами не существует');
      }

      this._perimeter = a + b + c;
      this._area = this.calculateArea(a, b, c);
   }

   calculateArea(a, b, c) {
      let s = this._perimeter / 2;
      let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return +triangleArea.toFixed(0);
   }

   getPerimeter() {
      return this._perimeter;
   }

   getArea() {
      return this._area;
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (error) {
      return {
         getPerimeter: () => 'Ошибка! Треугольник не существует',
         getArea: () => 'Ошибка! Треугольник не существует'
      };
   }
}
