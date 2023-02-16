/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpDistances: number[]): number {
  return jumpDistances.reduce((p, c) => p + c);
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  if (student.name == "Sebastian" && student.handedInOnTime) {
    return "VG";
  } else {
    return "IG";
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Weather {
  constructor(public city: string, public date: Date, public temp: number) {}
}

function averageWeeklyTemperature(weatherData: Weather[]) {
  const totalTemperature = weatherData.reduce((previous, current) => {
    if (
      current.city === "Stockholm" &&
      current.date.getTime() > Date.now() - 604800000
    ) {
      previous += current.temp;
    }
    return previous;
  }, 0);

  return totalTemperature / 7;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

class Product {
  constructor(
    public name: string,
    public price: number,
    public image: string
  ) {}
}

function showProduct(product: Product, parent: HTMLElement) {
  const container = document.createElement("div");
  const title = document.createElement("h4");
  const price = document.createElement("strong");
  const image = document.createElement("img");

  title.innerHTML = product.name;
  price.innerHTML = product.price.toString();
  image.src = product.image;

  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(price);
  parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  const listOfPassedStudents = document.querySelector("ul#passedstudents");
  const listOfFailedStudents = document.querySelector("ul#failedstudents");

  for (const student of students) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    if (student.handedInOnTime) {
      checkbox.checked = true;
      listItem.appendChild(checkbox);
      listOfPassedStudents?.appendChild(listItem);
    } else {
      checkbox.checked = false;
      listItem.appendChild(checkbox);
      listOfFailedStudents?.appendChild(listItem);
    }
  }
}
/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

function concatenateStrings() {
  let words = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  let result = words.join(", ");

  return result;
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}
}

function getUserAge(birthday: Date) {
  let ageDiff = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function createUser(user: User) {
  if (!(getUserAge(user.birthday) < 20)) {
    return user;
  } else {
    return "Du är under 20 år";
  }
}
