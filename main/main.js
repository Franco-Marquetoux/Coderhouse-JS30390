let STUDENTS = [];

function onConfirm(message, callback) {
  const ok = confirm(message);

  if (ok) {
    callback();
  }
}

function addStudent() {
  const firstName = prompt("Name:", "");
  const lastName = prompt("Last Name:", "");
  const id = prompt("id:", "");

  if (!firstName || !lastName || !id) {
    alert("Invalid fields");
    return;
  }

  onConfirm("Are you sure you want to create this student?", () => {
    const student = {
      firstName,
      lastName,
      id,
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
    emptyCell.colSpan = 3;
    emptyCell.style.textAlign = "center";
  }

  STUDENTS.forEach((student, idx) => {
    const row = table.insertRow(idx);

    const firstName = row.insertCell();
    const lastName = row.insertCell();
    const id = row.insertCell();

    firstName.innerHTML = student.firstName;
    lastName.innerHTML = student.lastName;
    id.innerHTML = student.id;
  });
}

window.onload = () => {
  STUDENTS = JSON.parse(localStorage.getItem("students")) || [];
  renderStudentsTable();
};
