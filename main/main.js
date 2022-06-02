let alumnos = [];
let cursos = [];

class Alumnos {
  constructor(nombre, apellido, curso) {
    (this.nombre = nombre), (this.apellido = apellido), (this.curso = curso);
  }
}

class Cursos {
  constructor(nombre, iniciaFecha) {
    (this.nombre = nombre),
      (this.fechaIni = iniciaFecha),
      (this.cantidadDeAlumnos = 0);
  }
}
cursos.push(new Cursos("BackEnd", "17/07/22"));
cursos.push(new Cursos("React js", "18/07/22"));
cursos.push(new Cursos("Vue js", "19/07/22"));
cursos.push(new Cursos("MySQL", "20/07/22"));
cursos.push(new Cursos("Phyton", "21/07/22"));
cursos.push(new Cursos("Angular", "22/07/22"));

(function agregarAlumnos() {
  let nombre;
  do {
    nombre = prompt("Ingresar el nombre del alumno");
    if (nombre == "") {
      break;
    }

    let apellido = prompt("Ingresar apellido");
    let curso = prompt("Ingrese curso");
    let alumno = new Alumnos(nombre, apellido, curso);
    let buscarCurso = cursos.find((c) => c.nombre == curso);

    if (buscarCurso) {
      if (buscarCurso.cantidadDeAlumnos < 5) {
        alumnos.push(alumno);
        let index = cursos.findIndex((c) => c.nombre == curso);
        cursos[index].cantidadDeAlumnos = cursos[index].cantidadDeAlumnos + 1;
        alert(
          "El cursos inicia " +
            cursos[index].fechaIni +
            " y la cantidad de incripciones es " +
            cursos[index].cantidadDeAlumnos
        );
      } else {
        alert("Cupo lleno");
      }
    } else {
      alert("No existe el curso");
    }
  } while (nombre !== "");
})();
