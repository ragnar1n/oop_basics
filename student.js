class Student extends Char{
    constructor(name,group) {
        super(name);
        this.group=group
    }

    greeting(){
        if (this.group===undefined){
            super.Who()
        }else{
            console.log('Hi, I am '+this.name+' from '+this.group)
        }
    }
}