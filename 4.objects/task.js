function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
   if (!this.hasOwnProperty('marks') || this.excluded) {
      console.log('Студент отчислен или не установлен предмет.');
      return;
   }

   this.marks.push(...marksToAdd);
}
Student.prototype.getAverage = function () {
   if (!this.hasOwnProperty('marks') || this.marks.length === 0 || this.excluded) {
      console.log('Нет оценок или студент отчислен.');
      return 0;
   }

   const sum = this.marks.reduce((total, mark) => total + mark, 0);
   return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
}
