function properties(obj) {
   for(var prop in obj) {
      console.log(obj[prop]);
   }
}

function Multiplier(number) {
   this.number = number;
   this.currentvalue = 1;
   this.multiply = function() {
      return this.currentvalue*= this.number;
   }
   this.getCurrentValue = function(){
      return this.currentvalue;
   }
}

function Photo(name, location) {
   this.name = name;
   this.location = location;
}

function Album() {
   this.set = new Array();

   this.addPhoto = function(p) {
      if(!(p instanceof Photo)) {
         console.log("Not a photo");
         return false;
      }
      this.set.push(p);
   }

   this.listPhoto = function() {
      for(var x in this.set) {
         console.log(this.set[x]);
      }
   }

   this.photoIndex = function(index) {
      console.log(this.set[index]);
   }
}

function Person(fname, lname, email) {
   this.fname = fname;
   this.lname = lname;
   this.email = email;
}

function Student() {
   this.student = true;
   Person.apply(this, arguments);
}

function Teacher() {
   this.teacher = true;
   Person.apply(this,arguments);
}

function School() {
   this.teachers = new Array();
   this.students = new Array();

   this.addTeacher = function(T) {
      this.teachers.push(T);
   }

   this.addStudent = function(S) {
      this.students.push(S);
   }
}
