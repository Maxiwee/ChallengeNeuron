# CHALLENGE - Neutron

## Ejercicio 1

Supongamos que tenemos un arreglo con la siguiente estructura:

    [ 1, 3, 4, 5, 3, 7, 1, 2, 1 ]

Haz un programa que recorre el arreglo y haga lo siguiente:

⦁ Contar cuántas veces se repite cada número y regresar la respuesta en un arreglo.

⦁ Regresar el número que más se repite

Ejemplo de este ejercicio:

    Arreglo de incidencias: [
    {numero: 1, repeticiones: 3},
    {numero: 3, repeticiones: 2},
    {numero: 4, repeticiones: 1},
    {numero: 5, repeticiones: 1},
    {numero: 7, repeticiones: 1},
    {numero: 2, repeticiones: 1}]

    Número más repetido: 1

## Ejercicio 2

Generar una Base de Datos local de mongo, que se usará para probar el programa:

Crear un proyecto con Express y usando el paquete Mongoose, configurado en una estructura de modelos, rutas y controladores, que haga lo siguiente:

    ⦁	Crear Estudiantes. X
    ⦁	Obtener a todos los estudiantes. X
    ⦁	Obtener un estudiante por id. X
    ⦁	Obtener todos los estudiantes y ordenarlos por fecha de nacimiento. X
    ⦁	Obtener todos los estudiantes de un grupo. X
    ⦁	Actualizar a un estudiante por id. X
    ⦁	Registrar calificaciones que pertenezcan a algún estudiante creado. X

Extra:

    ⦁ Configurar ESLint en el proyecto para garantizar buenas prácticas en el código
    ⦁ Obtener el estudiante con las mejores calificaciones en Matemáticas X

Modelos:

    Modelo de Estudiante

        Nombre: String REQUERIDO,
        Apellido: String REQUERIDO,
        Fecha de nacimiento: Date REQUERIDO,
        Grupo (A,B,C): String REQUERIDO

    Modelo de Calificaciones

        Estudiante: ObjectId REQUERIDO,
        Inglés: Number NO REQUERIDO,
        Español: Number NO REQUERIDO,
        Matemáticas: Number NO REQUERIDO,
        Historia: Number NO REQUERIDO
