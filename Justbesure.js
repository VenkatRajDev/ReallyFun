class Main {
    constructor(name,id,salary,gender){
        this.name = name,
        this.id = parseInt(id),
        this.salary = parseFloat(salary),
        this.gender = gender
    }

    nameAndId(){
        console.log(this.name,this.id)
    }

    salaryAndGender(){
        console.log(this.salary,this.gender)
    }
}

const detials = new Main(`Gopal`,'145','2939.40','Male')

detials.nameAndId()
detials.salaryAndGender()