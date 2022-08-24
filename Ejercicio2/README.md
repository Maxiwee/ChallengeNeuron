# ROUTAS

POST - http://localhost:3001/students/create

    Crear un estudiante.

    TIENE QUE RECIBIR POR BODY LOS DATOS:

    Modelo:
    {
        "name":"Coco",
        "lastname":"Ruiz",
        "dateOfBirth":"05/25/2005",
        "group":"C"
    }

    TODOS LOS DATOS SON REQUERIDOS

GET - http://localhost:3001/students

    Obtener todos los estudiantes

GET - http://localhost:3001/students/{grupo}

    Obtener todos los estudiantes pertenecientes a un grupo,

    Reemplazar grupo por: A, B, C.

GET - http://localhost:3001/students/order?order={type}

    Ordenar los estudiantes por su fecha de nacimiento.

    Sí queremos ordenar de forma ascendente, reemplazar {type} = asc

    Sí queremos ordenar de forma descendente, reemplazar {type} = desc

    Si no pasamos la forma de ordenar, ordena de forma ascendente por defecto.

PUT - http://localhost:3001/students/update

    Actualizar los datos personales y calificaciones de algún estudiante.

    Tiene que recibir por BODY los siguientes datos a actualizar y el ID del estudiante:

    DATOS PARA ACTUALIZAR: name, lastname, dateOfBirth, group, english, spanish, mathematics, history.

    MODELO:

    {
        "id": (id del estudiante)
        "name":"Coco",
        "lastname":"Ruiz",
        "dateOfBirth":"05/25/2005",
        "group":"B",
        "english": 10,
        "spanish": 10,
        "mathematics":10,
        "history":10
    }

    NO ES NECESARIO PONER TODOS LOS DATOS.

POST - http://localhost:3001/students/score?id={idEstudiante}

    Agregar calificaciones a un estudiante ya creado.

    Únicamente se pueden calificar a: english, spanish, mathematics, history.

    Pasar los datos por BODY, y el ID del estudiante por QUERY.

    MODELO:

    {
        "english": 5,
        "spanish": 5,
        "mathematics": 15,
        "history": 5
    }

GET - http://localhost:3001/students/math

    Obtener el estudiante con la calificación más alta en matemáticas.
