const btn  = document.querySelector(".Ass3");


btn.onclick = () => {
    var student = {
        name : "Aditya", 
        rollNo: 12, 
        class1: "D15A", 
        college: "vesit",
        print : function(){
            console.log(`name : ${this.name}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
            console.log(`Age : ${this.age}`);
        }

    }

    //prototype
    
    student.print()
    console.log("")
    console.log("print by constructor")

    function student1(name1 , rollNo , class1 ,college){
        this.name1 = name1
        this.rollNo = rollNo
        this.class1 = class1
        this.college = college

        this.print = ()=>{
            console.log(`name : ${this.name1}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
            console.log(`Age : ${this.age}`);
        }

    }
    //prototype
    student1.prototype.age = 19; 

    var student2 = new student1("Aditya" , 12 , "D15A" , "vesit")  
    student2.print();


    function takeInput(){
        let roll = prompt("enter your roll no :")
        try{
            if(!parseInt(roll)){
                throw "Roll number has to be a number"
            }
            if (roll== '0') {
                throw "Roll number can't be zero "
            }
            if (roll < 0) {
                throw "Roll number can't be NEGATIVE"
            }
            else{
                student.rollNo = roll;
                console.log("")
                console.log("printing after changing roll no")
                console.log(student.print())
            }
        }catch(err){
            alert(err)

        }
    }
    takeInput()
}