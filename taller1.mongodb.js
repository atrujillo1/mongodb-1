// Crear tabla
db.createCollection('users')

//Insertar datos
db.users.insertMany([

    {
        name: 'Emma',
        lastname: 'Brown',
        email: 'emma@example.com',
        age: 22,
        genero: "M"
    },
    {
        name: 'Michael',
        lastname: 'Davis',
        email: 'michael@example.com',
        age: 35,
        genero: "H"
    },
    {
        name: 'Sophia',
        lastname: 'Wilson',
        email: 'sophia@example.com',
        age: 28,
        genero: "M"
    },
    {
        name: 'David',
        lastname: 'Martinez',
        email: 'david@example.com',
        age: 27,
        genero: "H"
    },
    {
        name: 'Olivia',
        lastname: 'Taylor',
        email: 'olivia@example.com',
        age: 24,
        genero: "M"
    },
    {
        name: 'James',
        lastname: 'Thomas',
        email: 'james@example.com',
        age: 31,
        genero: "H"
    },
    {
        name: 'Emily',
        lastname: 'Anderson',
        email: 'emily@example.com',
        age: 29,
        genero: "M"
    },
    {
        name: 'Daniel',
        lastname: 'Garcia',
        email: 'daniel@example.com',
        age: 26,
        genero: "H"
    },
    {
        name: 'Ava',
        lastname: 'White',
        email: 'ava@example.com',
        age: 23,
        genero: "M"
    },
    {
        name: 'Alexander',
        lastname: 'Wilson',
        email: 'alexander@example.com',
        age: 33,
        genero: "H"
    }
]);

db.users.find();

//traer lo especificado
db.users.find({age: { $eq: 33 } });

//traer todo menos lo especificado
db.users.find({age: { $ne: 33 } });

//traer lo mayor a lo especificado
db.users.find({age: { $gt: 33 } });

//traer lo menor a lo especificado
db.users.find({age: { $lt: 33 } });

//mayor o igual
db.users.find({age: { $gte: 33 } });

//menor o igual
db.users.find({age: { $lte: 33 } });

//todos los especificados
db.users.find({age: { $in: [22,24,33] } });

//todos menos los especificados
db.users.find({age: { $nin: [22,24,33] } });


db.users.drop();



db.createCollection('users2')

db.users2.insertMany([
    {
        nombre: 'Elena',
        apellido: 'Gonzalez',
        correo: 'elena@example.com',
        ciudad: 'Madrid',
        pais: 'Spain',
        salario: 3500,
        edad: 29,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Carlos',
        apellido: 'Silva',
        correo: 'carlos@example.com',
        ciudad: 'Lisboa',
        pais: 'Portugal',
        salario: 3100,
        edad: 33,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Sophie',
        apellido: 'Dupont',
        correo: 'sophie@example.com',
        ciudad: 'Paris',
        pais: 'France',
        salario: 5000,
        edad: 31,
        altura: 165,
        peso: 140
    },
    {
        nombre: 'Max',
        apellido: 'Mueller',
        correo: 'max@example.com',
        ciudad: 'Berlin',
        pais: 'Germany',
        salario: 2000,
        edad: 34,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Luis',
        apellido: 'Santos',
        correo: 'luis@example.com',
        ciudad: 'Lisbon',
        pais: 'Portugal',
        salario: 8200,
        edad: 32,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Anna',
        apellido: 'Kowalski',
        correo: 'anna@example.com',
        ciudad: 'Warsaw',
        pais: 'Poland',
        salario: 4300,
        edad: 28,
        altura: 168,
        peso: 145
    },
    {
        nombre: 'Andrea',
        apellido: 'Moreno',
        correo: 'andrea@example.com',
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
        salario: 2500,
        edad: 30,
        altura: 170,
        peso: 155
    },
    {
        nombre: 'Marco',
        apellido: 'Rossi',
        correo: 'marco@example.com',
        ciudad: 'Rome',
        pais: 'Italy',
        salario: 1500,
        edad: 31,
        altura: 175,
        peso: 165
    },
    {
        nombre: 'Julia',
        apellido: 'Andersson',
        correo: 'julia@example.com',
        ciudad: 'Stockholm',
        pais: 'Sweden',
        salario: 1000,
        edad: 33,
        altura: 172,
        peso: 150
    },
    {
        nombre: 'Alex',
        apellido: 'Ivanov',
        correo: 'alex@example.com',
        ciudad: 'Moscow',
        pais: 'Russia',
        salario: 3000,
        edad: 35,
        altura: 178,
        peso: 175
    },
    {
        nombre: 'Laura',
        apellido: 'Garcia',
        correo: 'laura@example.com',
        ciudad: 'Barcelona',
        pais: 'Spain',
        salario: 6000,
        edad: 29,
        altura: 165,
        peso: 145
    },
    {
        nombre: 'Mohamed',
        apellido: 'Ali',
        correo: 'mohamed@example.com',
        ciudad: 'Cairo',
        pais: 'Egypt',
        salario: 4000,
        edad: 27,
        altura: 175,
        peso: 160
    },
    {
        nombre: 'Chihiro',
        apellido: 'Tanaka',
        correo: 'chihiro@example.com',
        ciudad: 'Tokyo',
        pais: 'Japan',
        salario: 1000,
        edad: 32,
        altura: 160,
        peso: 140
    },
    {
        nombre: 'Javier',
        apellido: 'Lopez',
        correo: 'javier@example.com',
        ciudad: 'Mexico City',
        pais: 'Mexico',
        salario: 3000,
        edad: 30,
        altura: 170,
        peso: 150
    },
    {
        nombre: 'Sebastian',
        apellido: 'Schmidt',
        correo: 'sebastian@example.com',
        ciudad: 'Berlin',
        pais: 'Germany',
        salario: 5900,
        edad: 31,
        altura: 175,
        peso: 165
    },
    {
        nombre: 'Emily',
        apellido: 'Jones',
        correo: 'emily@example.com',
        ciudad: 'London',
        pais: 'United Kingdom',
        salario: 2000,
        edad: 33,
        altura: 168,
        peso: 155
    },
    {
        nombre: 'Federico',
        apellido: 'Ricci',
        correo: 'federico@example.com',
        ciudad: 'Rome',
        pais: 'Italy',
        salario: 6000,
        edad: 32,
        altura: 180,
        peso: 170
    },
    {
        nombre: 'Sofia',
        apellido: 'Vargas',
        correo: 'sofia@example.com',
        ciudad: 'Bogota',
        pais: 'Colombia',
        salario: 5000,
        edad: 31,
        altura: 165,
        peso: 145
    },
    {
        nombre: 'Muhammad',
        apellido: 'Ahmed',
        correo: 'muhammad@example.com',
        ciudad: 'Karachi',
        pais: 'Pakistan',
        salario: 5500,
        edad: 29,
        altura: 172,
        peso: 155
    },
    {
        nombre: 'Dmitry',
        apellido: 'Ivanov',
        correo: 'dmitry@example.com',
        ciudad: 'Moscow',
        pais: 'Russia',
        salario: 6300,
        edad: 34,
        altura: 178,
        peso: 175
    }
])

db.users2.find();

db.users2.drop();


//1.
db.users2.find({edad: { $gt: 18 } });

db.users2.find({age: { $gte: 19 } });


//2.
db.users2.find({$or: [{ ciudad: 'London' },{ ciudad: 'Paris' }]})

//3. 
db.users2.find({$and: [{ salario: { $gt: 2000 } }, { edad: { $lt: 30 } } ]})

//4.
db.users2.find({pais: 'Spain',salario: { $gt: 3000 } })

//5.
db.users2.find({$and: [{ edad: { $gte: 25 } }, { edad: { $lte: 35 } }  ]})

//6.
db.users2.find({pais: { $ne: 'Germany' }})

//7.
db.users2.find({
    $and: [
        { ciudad: 'London' },
        {

            $or: [
                { salario: { $gt: 2500 } }, 
                { edad: { $gt: 30 } } 
            ]
        }
    ]
})

//8.
db.users2.find({pais: 'Mexico',peso: { $gt: 140 } })

//9.
db.users2.find({ciudad: { $nin: ['London', 'Paris'] }})

//10.
db.users2.find({
    $or: [
        { salario: { $lt: 2000 } }, 
        { edad: { $gt: 40 } } 
    ]
})

//11.
db.users2.find({
    pais: 'Canada',
    $or: [
        { salario: { $gt: 4000 } }, 
        { altura: { $gt: 180 } } 
    ]
})

//12. 
db.users2.find({
    pais: 'Italy',
    $and: [
        { edad: { $gte: 20 } }, 
        { edad: { $lte: 40 } }  
    ]
})


//13. 
db.users2.find({
    email: { $exists: false }
})

//14. 
db.users2.find({
    pais: 'France',
    salario: { $gte: 3000, $lte: 5000 }  
})


//15. 
db.users.find({
    pais: 'Brazil',
    $or: [
        { peso: { $lt: 120 } }, 
        { peso: { $gt: 140 } } 
    ]
})

//16. 
db.users2.find({
    $or: [
        { pais: 'Argentina', edad: { $lt: 25 } }, 
        { pais: 'Chile', edad: { $lt: 25 } }      
    ]
})

//17.
db.users2.find({
    $and: [
        { pais: { $nin: ['Spain', 'Mexico'] } }, 
        { salario: { $lt: 3000 } } 
    ]
})

//18.
db.users2.find({
    pais: 'Germany',
    $or: [
        { salario: { $lt: 4000 } },
        { edad: { $gt: 35 } } 
    ]
})

//19.
db.users.find({
    $and: [
        { pais: { $ne: 'Colombia' } }, 
        { altura: { $lt: 170 } } 
    ]
})


//20.
db.users.find({
    pais: 'India',
    $and: [
        { salario: { $exists: false } },  
    ]
})
