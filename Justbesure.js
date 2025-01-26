class Main {
    constructor(name,id,salary,gender,Human){
        this.name = name,
        this.id = parseInt(id),
        this.salary = parseFloat(salary),
        this.gender = gender,
        this.Human = Human
    }

    nameAndId(){
        console.log(this.name,this.id)
    }

    salaryAndGender(){
        console.log(this.salary,this.gender)
    }
    checkHuman(){
        console.log(this.Human)
    }
}

const detials = new Main(`Gopal`,'145','2939.40','Male',`He is Human`)

detials.nameAndId()
detials.salaryAndGender()
detials.checkHuman()