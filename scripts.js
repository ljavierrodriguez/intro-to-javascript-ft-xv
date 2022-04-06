window.onload = function(){
    
    console.log("Pagina Cargada completamente");

    /* let canDrive = false;

    if(age > 18){
        canDrive = true;
    } else {
        canDrive = false;
    } */

    //let canDrive = age > 18 ? true : false;
    let age = 16;
    let canDrive = (age > 18) ? "can" : "can't";
    let html = 'I ' + canDrive + " drive";
    console.log(html);


    let student = {
        name: 'Maria',
        lastname: 'Herrera',
        age: 22
    }

    let myHtml = `
        <div>
            <p>My name is ${student.name} ${student.lastname}</p>
            <p>I am ${student.age} years old. I ${student.age > 18 ? "can": "can't" } drive</p>
        </div>
    `
    console.log(myHtml);
}
