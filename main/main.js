window.onload = () => {
  STUDENTS = JSON.parse(localStorage.getItem("students")) || [];
  renderStudentsTable();

  COURSES = JSON.parse(localStorage.getItem("courses")) || [];
  renderCoursesTable();
};
