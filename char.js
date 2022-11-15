class Char{
    constructor(name) {
        this.name=name
        this.age
    }

    Who(){
        console.log("Hi, I'm "+this.name+'!')
    }

    setAge(age){
        this.age=age
    }
    getAge(){
        return this.age
    }
}