// 10.1 Rozgrzewka

//Exercise 1

{
    const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

    const ladiesNames = []

    for (const name of names) {
        let nameLength = name.length
        if (name.charAt(name.length - 1) === 'a') {
            ladiesNames.push(name);
        };
    }

    console.log('Ladies Names:', ladiesNames);

    const ladiesNames2 = [];

    for (const name of names) {
        if (name.slice(-1) === 'a') {
            ladiesNames2.push(name);
        }
    }

    console.log('Ladies Names2:', ladiesNames2);
}
{//Exercise 2

    const employees = {
        john: {
            name: 'John Doe',
            salary: 3000
        },
        amanda: {
            name: 'Amanda Doe',
            salary: 4000
        },
    }

    employeesNames = [];
    employeesSalaries = [];

    for (employeeId in employees) {
        const employeeName = employees[employeeId].name.split(' ', 1);
        const employeeSalary = employees[employeeId].salary;

        employeesNames.push(employeeName);
        employeesSalaries.push(employeeSalary);
    }
    console.log('employeesNames', employeesNames);
    console.log('employeesSalaries', employeesSalaries);

}
{//Exercise 3
    const salaries = [2000, 3000, 1500, 6000, 3000];

    { //1st solution
        let salariesMax = salaries[0];
        let salariesMin = salaries[0];
        let salariesSum = 0;

        for (const salary in salaries) {
            if (salaries[salary] > salariesMax) {
                salariesMax = salaries[salary];
            }
            if (salaries[salary] < salariesMin) {
                salariesMin = salaries[salary];
            }

            salariesSum += salaries[salary];

        }

        console.log('salariesMax:', salariesMax);
        console.log('salariesMin:', salariesMin);
        console.log('salariesSum:', salariesSum);

    }
    {//2nd solutuon

        let sum = 0;
        let highestSalary = salaries[0];
        let lowestSalary = salaries[0];

        for (const salary of salaries) {
            sum += salary;
            if (salary > highestSalary) highestSalary = salary;
            if (salary < lowestSalary) lowestSalary = salary;
        }

        console.log(sum, highestSalary, lowestSalary);
    }
}

{//Exercise 4
    const persons = {
        john: 2000,
        amanda: 3000,
        thomas: 1500,
        james: 6000,
        claire: 3000
    };

    {//1st solution
        let salariesMax = 0;
        let salariesMin = 9999;
        let salariesSum = 0;

        for (const person in persons) {
            if (persons[person] > salariesMax) {
                salariesMax = persons[person];
            }
            if (persons[person] < salariesMin) {
                salariesMin = persons[person];
            }

            salariesSum += persons[person];

        }

        console.log('salariesMax:', salariesMax);
        console.log('salariesMin:', salariesMin);
        console.log('salariesSum:', salariesSum);


    }

    {//2nd solutuon
        const persons = {
            john: 2000,
            amanda: 3000,
            thomas: 1500,
            james: 6000,
            claire: 3000
        }

        let sum = 0;
        let highestSalary = persons.john;
        let lowestSalary = persons.john;

        for (const personId in persons) {
            const personSalary = persons[personId];
            sum += personSalary;
            if (personSalary > highestSalary) highestSalary = personSalary;
            if (personSalary < lowestSalary) lowestSalary = personSalary;
        }

        console.log(sum, highestSalary, lowestSalary);
    }

    {//3rd solution
        const persons = {
            john: 2000,
            amanda: 3000,
            thomas: 1500,
            james: 6000,
            claire: 3000
        }
        // covert obj to array of its values ([2000, 3000, 1500...])
        const salaries = Object.values(persons);

        let sum = 0;
        let highestSalary = salaries[0];
        let lowestSalary = salaries[0];

        for (const salary of salaries) {
            sum += salary;
            if (salary > highestSalary) highestSalary = salary;
            if (salary < lowestSalary) lowestSalary = salary;
        }

        console.log(sum, highestSalary, lowestSalary);
    }
}

{//Exercise 5
    const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

    const uniqueTags = {};
    const uniqueTags2 = {};

    {//1st solution
        for (const tag of tags) {
            if (uniqueTags.hasOwnProperty(tag) == false) {
                uniqueTags[tag] = { appearances: 1 }
            } else uniqueTags[tag].appearances++;
        }
        console.log(uniqueTags);
    }

    { //2nd solution
        for (const tag of tags) {
            if (!uniqueTags2[tag]) uniqueTags2[tag] = { appearances: 1 };
            else uniqueTags2[tag].appearances++;
        }
        console.log(uniqueTags2);
    }

    { //WHY NOT WORKING??
        /*  for (const tag of tags) {
              if (uniqueTags.hasOwnProperty(tag) == false) {
                  console.log(tag);
                  console.log(uniqueTags[tag])
                  uniqueTags.tag = { appearances: 1 }
                  console.log(uniqueTags);
              } else uniqueTags.tag.appearances++;
          }*/

    }
}

//10.1 Praca w funkcjami
{
    //Exercise 1
    {
        const foo = 4;

        function Bar() {
            const foo = 5;
            const spam = 6;
            console.log(foo, spam, eggs);

            function Baz() {
                const spam = 7;
                const eggs = 8;
                console.log(foo, spam);
            }
        }
        //ODP 1 : TAK
        //ODP 2 : NIE
        //ODP 3 : NIE
        //ODP 4 : 5
    }

    //Exercise 3 --> doczytaj o THIS

    //Exercise 4
    { //1st solution
        const employees = [
            { name: 'Amanda Doe', salary: 3000 },
            { name: 'John Doe', salary: 4000 },
            { name: 'Claire Downson', salary: 2000 },
            { name: 'Freddie Clarkson', salary: 6000 },
            { name: 'Thomas Delaney', salary: 8200 }
        ];

        function filterEmployees(array, minSalary, maxSalary) {
            const filteredArray = [];
            for (const employeeId in array) {
                const employee = array[employeeId];
                if (employee.salary > minSalary && employee.salary < maxSalary) {
                    filteredArray.push(employee);
                }
            }
            return filteredArray;
        }

        const filteredEmployees = filterEmployees(employees, 2000, 8000);
        console.log('filter 1', filteredEmployees);
        // czy skoro przyjmuje tablice to powinien uzyć nazwy, table/array czy obojętnie zeby nie sugerować??
    }
    {//2nd solution
        const employees = [
            { name: 'Amanda Doe', salary: 3000 },
            { name: 'John Doe', salary: 4000 },
            { name: 'Claire Downson', salary: 2000 },
            { name: 'Freddie Clarkson', salary: 6000 },
            { name: 'Thomas Delaney', salary: 8200 }
        ];

        function filterEmployees(arr, min, max) {
            const filteredArray = [];
            for (const empl of employees) { //czemu tu zostało uyte employees od razu?? Ma to znaczenie?
                if (empl.salary > min && empl.salary < max) {
                    filteredArray.push(empl);
                }
            }
            return filteredArray;
        }

        const filteredEmployees = filterEmployees(employees, 2000, 8000);
        console.log('filter 2', filteredEmployees);
        // czy skoro przyjmuje tablice to powinien uzyć nazwy, table/array czy obojętnie zeby nie sugerować??
    }

    {//Exercise 5
        const obj = {
            firstName: 'John',
            lastName: 'Doe'
        }

        function displayInConsole(object) {
            for (const obj in object) {
                console.log(obj + ': ' + object[obj])
            }
        }
        displayInConsole(obj)  //zeby wypchnać to na ekran trzeba by napisać funkcję popdobną do PrintMessage czy jakoś inaczej? bo trzeba uzyć terutnr?
    }

    {//Exercise 6
        function forEach(array, callback) {
            for (const position of array) {
                callback(position);
            }
        }
        forEach(['John', 'Amanda', 'Thomas'], function (item) { console.log(item); });
    }
    //Exercise 7
    {//1st solution
        function formatName(name) {
            const nameSplit = name.split(' '),
                newFirstNameLetter = nameSplit[0].charAt(0).toUpperCase(),
                newFirstNameLetters = nameSplit[0].substring(1).toLowerCase(),
                newFirstSurnameLetter = nameSplit[1].charAt(0).toUpperCase(),
                newFirstSurnameLetters = nameSplit[1].substring(1).toLowerCase();

            const formatedName = newFirstNameLetter + newFirstNameLetters + ' ' + newFirstSurnameLetter + newFirstSurnameLetters;

            console.log(formatedName);
            return formatedName;
        }


        formatName('aMAnDa dOE'); // returns Amanda Doe
        formatName('AMANDA DOE'); // returns Amanda Doe
        formatName('john DOE'); // returns John Doe
    }
    {
        function formatName1(name) {
            const firstNameAndLastName = name.split(' ');
            let firstName = firstNameAndLastName[0];
            let lastName = firstNameAndLastName[1];

            firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
            lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase();
            console.log(firstName + ' ' + lastName);
            return firstName + ' ' + lastName;
        }
        formatName1('aMAnDa dOE'); // returns Amanda Doe
        formatName1('AMANDA DOE'); // returns Amanda Doe
        formatName1('john DOE'); // returns John Doe
    }

    //Exercise 8
    {
        function getEvensInRange(first, last) {
            const evenArray = [];
            for (let i = first; i <= last; i++) {
                if (i % 2 === 0) {
                    evenArray.push(i);
                }
            }
            console.log(evenArray);
            return evenArray;
        }
        getEvensInRange(0, 9);
        getEvensInRange(7, 12);
    }

    //Exercise 9
    {
        function filter(array, callback) {
            const filteredArray = [];
            for (element of array) {
                if (callback(element) == 1) filteredArray.push(element);
            }
            console.log(filteredArray);
        }
        filter([5, 6, 7, 8, 9, 12, 0], function (item) { return item % 2 === 0 });
    }

}
