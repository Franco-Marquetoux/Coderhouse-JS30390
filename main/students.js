var STUDENTS = [];

function addStudent() {
  const firstName = prompt("Name:", "");
  const lastName = prompt("Last Name:", "");
  const id = prompt("id:", "");

  if (!firstName || !lastName || !id) {
    alert("Invalid fields");
    return;
  }

  if (STUDENTS.some((s) => s.id == id)) {
    alert("This id is already taken");
    return;
  }

  onConfirm("Are you sure you want to create this student?", () => {
    const student = {
      firstName,
      lastName,
      id,
      courses: [],
    };

    STUDENTS.push(student);

    localStorage.setItem("students", JSON.stringify(STUDENTS));
    renderStudentsTable();
  });
}

function removeStudent() {
  const id = prompt("id:", "");

  if (!id) {
    alert("Invalid fields");
    return;
  }

  onConfirm("Are you sure you want to remove this student?", () => {
    STUDENTS = STUDENTS.filter((student) => student.id !== id);
    localStorage.setItem("students", JSON.stringify(STUDENTS));
    renderStudentsTable();
  });
}

function renderStudentsTable() {
  const table = document.querySelector("#studentsTable>tbody");

  table.innerHTML = "";

  if (!STUDENTS.length) {
    const emptyRow = table.insertRow(0);
    const emptyCell = emptyRow.insertCell();

    emptyCell.innerHTML = "No data. Add students!";
    emptyCell.colSpan = 4;
    emptyCell.style.textAlign = "center";
  }

  STUDENTS.forEach((student, idx) => {
    const row = table.insertRow(idx);

    const id = row.insertCell();
    const firstName = row.insertCell();
    const lastName = row.insertCell();
    const courses = row.insertCell();

    firstName.innerHTML = student.firstName;
    lastName.innerHTML = student.lastName;
    id.innerHTML = student.id;
    courses.innerHTML = student.courses.map((c) => c.name).join(",");
  });
}

function addStudentToCourse() {
  const studentId = prompt("Id Student", "");
  const courseId = prompt("Id Course", "");

  if (!studentId || !courseId) {
    alert("Invalid fields");
    return;
  }

  const student = STUDENTS.find((s) => s.id == studentId);
  const course = COURSES.find((c) => c.id == courseId);
  if (!student) {
    alert("Invalid student");
    return;
  }

  if (!course) {
    alert("Invalid course");
    return;
  }

  if (student.courses.some((c) => c.id == courseId)) {
    alert("This student is already in this course");
    return;
  }

  student.courses.push(course);
  renderStudentsTable();
}
