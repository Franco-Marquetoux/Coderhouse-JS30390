const MENU_info = `
Elija una de las opciones del siguiente menu:
  1. Crear alumno
  2. Crear cursos
  3. Listar alumnos
  4. Listar cursos
  5. Eliminar alumno
  6. Eliminar curso
  7. Agregar alumno a un curso
  8. Mostrar detalles de un curso
  9. Mostrar itinerario
  0. Salir
`;

const ACCIONES = {
  CrearEstudiante: 1,
  CrearCurso: 2,
  ListadoEstudiantes: 3,
  ListadoCursos: 4,
  BorrarEstudiante: 5,
  BorrarCurso: 6,
  AgregarEstudianteACurso: 7,
  MostrarCurso: 8,
  MostrarAgenda: 9,
  Salir: 0,
};

class Estudiante {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = dni;
  }

  nombreCompleto() {
    return `🙍‍♂️ ${this.nombre} ${this.apellido}`;
  }
}

class Curso {
  constructor(nombre, fechaInicio, vacantes = 5) {
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.vacantes = vacantes;
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    if (this.estudiantes.length >= this.vacantes) {
      alert("Cupo lleno");
      return;
    }

    this.estudiantes.push(estudiante);
  }

  info() {
    const estudiantes = this.estudiantes
      .map((s) => s.nombreCompleto())
      .join("\n");

    return `
      Titulo: ${this.nombre},
      Fecha de inicio: ${this.fechaInicio},
      Alumnos: ${estudiantes}
    `;
  }
}

let estudiantes = [];
let cursos = [
  new Curso("Sistemas y Metodos", "17/07/22"),
  new Curso("Introduccion a la programacion", "20/07/22"),
];

function crearEstudiante() {
  const nombre = prompt("Ingrese nombre del estudiante:");
  const apellido = prompt("Ingrese apellido del estudiante:");
  const id = prompt("Ingrese DNI del estudiante:");

  estudiantes.push(new Estudiante(nombre, apellido, id));
}

function crearCurso() {
  const nombre = prompt("Ingrese nombre del curso:");
  const fechaInicio = prompt("Ingrese fecha de inicio:");
  const vacantes = prompt("Ingrese cantidad de vacantes:");

  return new Curso(nombre, fechaInicio, vacantes);
}

function listarAlumnos() {}

//POR CADA CASE UNA FUNCION. UNA VES HECHAS LAS FUNCIONES, BORRAR CASE.

/** 
  * Programa que emula un sistema para registrar alumnos y cursos.

  Acciones:
    1. Crear alumno (nombre, apellido)
    2. Crear cursos
    3. Listar alumnos
    4. Listar cursos
    5. Eliminar alumno
    6. Eliminar curso
    7. Agregar Alumno a un curso
    8. Mostrar detalles de un curso
    9. Mostrar itinerario
    12. Mostrar ficha alumno
    0. Salir
**/

function main() {
  let accion;
  let operacion;

  while (operacion != 0) {
    accion = parseInt(prompt(MENU_info));

    let estudianteId;
    let curso;
    let estudiante;

    switch (accion) {
      case ACCIONES.CrearEstudiante:
        estudiante = crearEstudiante();

        break;

      case ACCIONES.CrearCurso:
        curso = crearCurso();

        if (cursos.some((c) => c.nombre === curso.nombre)) {
          alert("Ya existe un curso con ese nombre");
          break;
        }

        cursos.push(curso);
        break;

      case ACCIONES.ListadoEstudiantes:
        const nombresFormateados = estudiantes
          .map((s) => s.nombreCompleto())
          .join("\n");
        alert(`Lista de alumnos: \n ${nombresFormateados}`);
        break;

      case ACCIONES.ListadoCursos:
        const cursosFormateados = cursos
          .map(
            (c) =>
              `📎 ${c.nombre} - ${c.fechaInicio} (${c.estudiantes.length}/${c.vacantes} estudiantes)`
          )
          .join("\n");
        alert(`Lista de cursos:\n ${cursosFormateados}`);
        break;

      case ACCIONES.BorrarEstudiante:
        estudianteId = prompt("DNI del alumno a eliminar:");
        estudiantes = estudiantes.filter((s) => s.id !== estudianteId);
        break;

      case ACCIONES.BorrarCurso:
        const nombre = prompt("Nombre del curso a eliminar:");
        cursos = cursos.filter((s) => s.nombre !== nombre);
        break;

      case ACCIONES.AgregarEstudianteACurso:
        estudianteId = prompt("DNI del alumno:");
        nombreCurso = prompt("Nombre del curso:");

        estudiante = estudiantes.find((s) => s.id === estudianteId);
        curso = cursos.find((c) => c.nombre === nombreCurso);

        curso.agregarEstudiante(estudiante);
        break;

      case ACCIONES.MostrarCurso:
        nombreCurso = prompt("Nombre del curso:");
        curso = cursos.find((c) => c.nombre === nombreCurso);
        alert(curso.info());
        break;

      case ACCIONES.MostrarAgenda:
        const resultado = cursos.map((c) => c.info());
        alert(`Itinerario: \n ${resultado.join("\n")}`);
        break;

      case ACCIONES.Salir:
        operacion = 0;
        break;
    }
  }
}
