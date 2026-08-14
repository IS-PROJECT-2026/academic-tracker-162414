const addBtn = document.getElementById("addBtn");
const courseTable = document.getElementById("courseTable");
const totalCourses = document.getElementById("totalCourses");
const averageScore = document.getElementById("averageScore");

let courses = JSON.parse(localStorage.getItem("courses")) || [];

function getGrade(mark) {
    if (mark >= 70) return "A";
    if (mark >= 60) return "B";
    if (mark >= 50) return "C";
    if (mark >= 40) return "D";
    return "E";
}

function saveCourses() {
    localStorage.setItem("courses", JSON.stringify(courses));
}

function updateSummary() {
    totalCourses.textContent = courses.length;

    if (courses.length === 0) {
        averageScore.textContent = "0";
        return;
    }

    let total = 0;
    for (let i = 0; i < courses.length; i++) {
        total += courses[i].marks;
    }

    averageScore.textContent = (total / courses.length).toFixed(2);
}

function displayCourses() {
    courseTable.innerHTML = "";

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const grade = getGrade(course.marks);
        const passed = course.marks >= 50;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.marks}</td>
            <td>${grade}</td>
            <td class="${passed ? "pass" : "fail"}">
                ${passed ? "Pass" : "Fail"}
            </td>
            <td>
                <button class="delete-btn" onclick="deleteCourse(${i})">Delete</button>
            </td>
        `;

        courseTable.appendChild(row);
    }

    updateSummary();
}

function deleteCourse(index) {
    courses.splice(index, 1);
    saveCourses();
    displayCourses();
}

addBtn.addEventListener("click", function () {
    const courseInput = document.getElementById("course");
    const marksInput = document.getElementById("marks");

    const name = courseInput.value.trim();
    const marks = Number(marksInput.value);

    if (name === "" || marksInput.value === "") {
        alert("Please enter both course name and marks.");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    courses.push({
        name: name,
        marks: marks
    });

    saveCourses();
    displayCourses();

    courseInput.value = "";
    marksInput.value = "";
});

// Load saved data when page opens
displayCourses();