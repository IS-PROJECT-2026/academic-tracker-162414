function calculateGPA(courses) {
  let totalPoints = 0;
  let totalUnits = 0;

  courses.forEach(course => {
    totalPoints += course.grade * course.units;
    totalUnits += course.units;
  });

  return totalUnits === 0
    ? 0
    : (totalPoints / totalUnits).toFixed(2);
}


const courses = [
  { grade: 4.0, units: 3 },
  { grade: 3.5, units: 2 }
];

console.log(calculateGPA(courses));