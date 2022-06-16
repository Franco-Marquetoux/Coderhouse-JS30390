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

// const MENU_info = `
// Elija una de las opciones del siguiente menu:
//   1. Crear alumno
//   2. Crear cursos
//   3. Listar alumnos
//   4. Listar cursos
//   5. Eliminar alumno
//   6. Eliminar curso
//   7. Agregar alumno a un curso
//   8. Mostrar detalles de un curso
//   9. Mostrar itinerario
//   0. Salir
// `;

// const ACCIONES = {
//   CrearEstudiante: 1,
//   CrearCurso: 2,
//   ListadoEstudiantes: 3,
//   ListadoCursos: 4,
//   BorrarEstudiante: 5,
//   BorrarCurso: 6,
//   AgregarEstudianteACurso: 7,
//   MostrarCurso: 8,
//   MostrarAgenda: 9,
//   Salir: 0,
// };

// class Estudiante {
//   constructor(nombre, apellido, dni) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.id = dni;
//   }

//   nombreCompleto() {
//     return `🙍‍♂️ ${this.nombre} ${this.apellido}`;
//   }
// }

// class Curso {
//   constructor(nombre, fechaInicio, vacantes = 5) {
//     this.nombre = nombre;
//     this.fechaInicio = fechaInicio;
//     this.vacantes = vacantes;
//     this.estudiantes = [];
//   }

//   agregarEstudiante(estudiante) {
//     if (this.estudiantes.length >= this.vacantes) {
//       alert("Cupo lleno");
//       return;
//     }

//     this.estudiantes.push(estudiante);
//   }

//   info() {
//     const estudiantes = this.estudiantes
//       .map((s) => s.nombreCompleto())
//       .join("\n");

//     return `
//       Titulo: ${this.nombre},
//       Fecha de inicio: ${this.fechaInicio},
//       Alumnos: ${estudiantes}
//     `;
//   }
// }

// // let estudiantes = [new Estudiante("Lichu", "Lucatti", "123")];

// let cursos = [
//   new Curso("Sistemas y Metodos", "17/07/22"),
//   new Curso("Introduccion a la programacion", "20/07/22"),
//   new Curso("POO", "12/12/12"),
// ];

// function crearEstudiante() {
//   const nombre = prompt("Ingrese nombre del estudiante:");
//   const apellido = prompt("Ingrese apellido del estudiante:");
//   const id = prompt("Ingrese DNI del estudiante:");

//   estudiantes.push(new Estudiante(nombre, apellido, id));
// }

// function crearCurso() {
//   const nombre = prompt("Ingrese nombre del curso:");
//   const fechaInicio = prompt("Ingrese fecha de inicio:");
//   const vacantes = prompt("Ingrese cantidad de vacantes:");

//   cursos.push(new Curso(nombre, fechaInicio, vacantes));
// }

// function listadoEstudiantes() {
//   const nombresFormateados = estudiantes
//     .map((s) => s.nombreCompleto())
//     .join("\n");
//   alert(`Lista de alumnos: \n ${nombresFormateados}`);
// }

// function listadoCursos() {
//   const cursosFormateados = cursos
//     .map(
//       (c) =>
//         `📎 ${c.nombre} - ${c.fechaInicio} (${c.estudiantes.length}/${c.vacantes} estudiantes)`
//     )
//     .join("\n");
//   alert(`Lista de cursos:\n ${cursosFormateados}`);
// }

// function eliminarEstudiante() {
//   const estudianteId = prompt("DNI del alumno a eliminar:");
//   estudiantes = estudiantes.filter((s) => s.id !== estudianteId);
// }

// function eliminarCurso() {
//   const nombre = prompt("Nombre del curso a eliminar:");
//   cursos = cursos.filter(
//     (s) => s.nombre.toLowerCase() !== nombre.toLowerCase()
//   );
// }

// function agregarEstudianteACurso() {
//   const estudianteId = prompt("DNI del alumno:");
//   const nombreCurso = prompt("Nombre del curso:");

//   const estudiante = estudiantes.find((s) => s.id === estudianteId);
//   const curso = cursos.find(
//     (c) => c.nombre.toLowerCase() === nombreCurso.toLowerCase()
//   );
//   if (!curso || !estudiante) {
//     alert("Datos invalidos");
//     return;
//   }
//   curso.agregarEstudiante(estudiante);
// }

// function mostrarCurso() {
//   const nombreCurso = prompt("Nombre del curso:");
//   const curso = cursos.find(
//     (c) => c.nombre.toLowerCase() === nombreCurso.toLowerCase()
//   );
//   if (!curso) {
//     alert("No se encontro curso");
//     return;
//   }
//   alert(curso.info());
// }

// function mostrarAgenda() {
//   const resultado = cursos.map((c) => c.info());
//   alert(`Itinerario: \n ${resultado.join("\n")}`);
// }

// function mostrarFichaEstudiante() {
//   const estudianteId = prompt("Ingrese DNI");
//   const estudiante = estudiantes.find((s) => s.id === estudianteId);
//   if (!estudiante) {
//     alert("No se encontro el estudiante");
//     return;
//   }
//   let cursosFicha = cursos
//     .filter((c) => c.estudiantes.some((e) => e.id == estudianteId))
//     .map((c) => c.nombre)
//     .join(",\n");

//   alert(`
//     Nombre y Apellido: ${estudiante.nombreCompleto()},
//     DNI: ${estudiante.id}
//     Cursos: ${cursosFicha}
//   `);
// }
