function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
   if (this.marks === undefined) {
      console.log(`${this.name} is excluded and cannot receive marks.`);
      return;
   }
   this.marks.push(...marksToAdd);
   console.log(`Marks added for ${this.name}: ${marksToAdd}`);
};

Student.prototype.getAverage = function () {
   if (!this.marks || this.marks.length === 0) {
      console.log(`${this.name} has no marks.`);
      return 0;
   }
   const sum = this.marks.reduce((total, mark) => total + mark, 0);
   const average = sum / this.marks.length;
   console.log(`Average marks for ${this.name}: ${average.toFixed(2)}`);
   return average;
};

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
   console.log(`${this.name} is excluded from the educational process. Reason: ${reason}`);
};