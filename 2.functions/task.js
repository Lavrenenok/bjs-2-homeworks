function getArrayParams(...arr) {
   let min = arr[0];
   let max = arr[0];
   let sum = arr[0];

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
      if (arr[i] < min) {
         min = arr[i];
      }
      sum += arr[i];
   }

   let avg = (sum / arr.length).toFixed(2);

   return { max: +max, min: +min, avg: +avg };
}

function summElementsWorker(...arr) {
   if (arr.length === 0) {
      return 0;
   }

   return arr.reduce((sum, element) => sum + element, 0);
}

function differenceMaxMinWorker(...arr) {
   if (arr.length === 0) {
      return 0;
   }

   let max = arr[0];
   let min = arr[0];

   for (let i = 1; i < arr.length; i++) {
      max = Math.max(max, arr[i]);
      min = Math.min(min, arr[i]);
   }

   return max - min;
}

function differenceEvenOddWorker(...arr) {
   if (arr.length === 0) {
      return 0;
   }

   let sumEvenElement = 0;
   let sumOddElement = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         sumEvenElement += arr[i];
      } else {
         sumOddElement += arr[i];
      }
   }

   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
   if (arr.length === 0) {
      return 0;
   }

   let sumEvenElement = 0;
   let countEvenElement = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         sumEvenElement += arr[i];
         countEvenElement++;
      }
   }

   return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
   let maxWorkerResult = -Infinity;

   for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(...arrOfArr[i]);

      if (result > maxWorkerResult) {
         maxWorkerResult = result;
      }
   }

   return maxWorkerResult;
}
