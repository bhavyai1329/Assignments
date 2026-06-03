interface employeeTable {
    name : string;
    baseSalary : number;
    experience : number;
    yearEndRating : number
}

const empDets : employeeTable[] = [
    {name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, yearEndRating: 4.2},
    {name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, yearEndRating: 3.8},
    {name: "Carol Davis", baseSalary: 82000.0, experience:7.1, yearEndRating: 4.5},
    {name: "David Brown", baseSalary: 90000.0, experience: 10.2, yearEndRating: 2.5},
    {name: "Eva Green", baseSalary: 60000.0, experience: 2.4, yearEndRating: 3.5}
]

const hiekmap: Map<string, number> = new Map();

for(const emp of empDets) {
    let variablePay: number = 0;
    let bonus: number = 0;

    if(emp.yearEndRating >= 4.0){
        variablePay = 0.15;
        bonus = 1500;
    }
    else if(emp.yearEndRating >=3 && emp.yearEndRating <4){
        variablePay = 0.10;
        bonus = 1200;
    }
    else{
        variablePay = 0.03;
        bonus = 300;
    }

    const reward = emp.experience >= 5 ? 5000 : 0;
    const hike = (emp.baseSalary * variablePay) + bonus + reward;
    const hikePercentage = hike / emp.baseSalary;

    hiekmap.set(emp.name, hikePercentage);
}

for(const[name, hike] of hiekmap.entries()){
    console.log(`${name} : ${(hike * 100).toFixed(2)}%` )
}