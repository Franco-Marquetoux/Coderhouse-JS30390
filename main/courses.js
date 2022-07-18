var COURSES = [];

function addCourse() {
  const name = prompt("Name:", "");
  const id = prompt("id:", "");

  if (!name || !id) {
    alert("Invalid fields");
    return;
  }
  if (COURSES.some((c) => c.id == id)) {
    alert("This id is already taken");
    return;
  }

  onConfirm("Are you sure you want to create this course?", () => {
    const course = {
      name,
      id,
    };

    COURSES.push(course);

    localStorage.setItem("courses", JSON.stringify(COURSES));
    renderCoursesTable();
  });
}

function removeCourse() {
  const id = prompt("id:", "");

  if (!id) {
    alert("Invalid fields");
    return;
  }

  onConfirm("Are you sure you want to remove this course?", () => {
    COURSES = COURSES.filter((course) => course.id !== id);
    localStorage.setItem("courses", JSON.stringify(COURSES));
    renderCoursesTable();
  });
}

function renderCoursesTable() {
  const table = document.querySelector("#coursesTable>tbody");

  table.innerHTML = "";

  if (!COURSES.length) {
    const emptyRow = table.insertRow(0);
    const emptyCell = emptyRow.insertCell();

    emptyCell.innerHTML = "No data. Add courses!";
    emptyCell.colSpan = 2;
    emptyCell.style.textAlign = "center";
  }

  COURSES.forEach((course, idx) => {
    const row = table.insertRow(idx);
    const id = row.insertCell();
    const name = row.insertCell();

    name.innerHTML = course.name;
    id.innerHTML = course.id;
  });
}
