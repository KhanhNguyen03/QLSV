let stuManage = new StudentManagement();

function showHome() {
    document.getElementById("main").innerHTML =
        `
    <table border="1">
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>DOB</th>
    <th>Gender</th>
    <th>Phone</th>
    <th>Hometown</th>
    <th>Grade</th>
 
    </tr>
    <tbody id="listStudent"></tbody>

     </table> 
`
    let list = stuManage.listStudent;
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
    <tr>
    <td>${list[i].id}</td>
    <td>${list[i].name}</td>
    <td>${list[i].dob}</td>
    <td>${list[i].gender}</td>
    <td>${list[i].phone}</td>
    <td>${list[i].hometown}</td>
    <td>${list[i].grade}</td>
    <td><button onclick="removeStudent(${i})">Delete</button></td>
    <td><button onclick="showFormUpdate(${i})">Edit</button></td>
    </tr>

`
    }
    document.getElementById("listStudent").innerHTML=html;


}

function showFormAdd(){
    document.getElementById("main").innerHTML=`
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="dob" placeholder="Date of Birth">
    <input type="text" id="gender" placeholder="Gender">
    <input type="text" id="phone" placeholder="Phone">
    <input type="text" id="hometown" placeholder="Hometown">
    <input type="text" id="grade" placeholder="Grade">
    <button onclick="add()">Add</button>
    `
}



function add(){
    let id =document.getElementById("id").value;
    let name =document.getElementById("name").value;
    let dob =document.getElementById("dob").value;
    let gender =document.getElementById("gender").value;
    let phone =document.getElementById("phone").value;
    let hometown =document.getElementById("hometown").value;
    let grade =document.getElementById("grade").value;
    let newStudent= new Student(id,name,dob,gender,phone,hometown,grade);
    stuManage.add(newStudent);
    showHome();

}
function removeStudent(index){
    let isConfirm=confirm("Are you sure ?");
    if(isConfirm){
        stuManage.remove(index);
        showHome();
    }

}
function showFormUpdate(index){
    let list=stuManage.listStudent;
    let oldStudent=list[index];
    document.getElementById("main").innerHTML=`
    <input type="text" id="id" placeholder="Id" value="${oldStudent.id}">
    <input type="text" id="name" placeholder="Name" value="${oldStudent.name}">
    <input type="text" id="dob" placeholder="Date of Birth" value="${oldStudent.dob}">
    <input type="text" id="gender" placeholder="Gender" value="${oldStudent.gender}">
    <input type="text" id="phone" placeholder="Phone" value="${oldStudent.phone}">
    <input type="text" id="hometown" placeholder="Hometown" value="${oldStudent.hometown}">
    <input type="text" id="grade" placeholder="Grade" value="${oldStudent.grade}">
    <button onclick="updateStudent(${index})">Edit</button>`
}

function updateStudent(index){
    let id =document.getElementById("id").value;
    let name =document.getElementById("name").value;
    let dob =document.getElementById("dob").value;
    let gender =document.getElementById("gender").value;
    let phone =document.getElementById("phone").value;
    let hometown =document.getElementById("hometown").value;
    let grade =document.getElementById("grade").value;
    let newStudent= new Student(id,name,dob,gender,phone,hometown,grade);
    stuManage.update(index,newStudent);
    showHome();
}
function showFormSearch(){
    document.getElementById("main").innerHTML=`
    <input type="text" id="searchId" placeholder="Enter student ID">
    <button onclick="searchStudentById()" >Search</button>
    
    `
}

function searchStudentById(){
    let studentId= document.getElementById("searchId").value;
    showStudentInfo(studentId);

}

function showStudentInfo(studentId){
    let student=stuManage.searchById(studentId);
    if (student){
        document.getElementById("main").innerHTML=`
     <input type="text" id="id" placeholder="Id" value="${student.id}">
    <input type="text" id="name" placeholder="Name" value="${student.name}">
    <input type="text" id="dob" placeholder="Date of Birth" value="${student.dob}">
    <input type="text" id="gender" placeholder="Gender" value="${student.gender}">
    <input type="text" id="phone" placeholder="Phone" value="${student.phone}">
    <input type="text" id="hometown" placeholder="Hometown" value="${student.hometown}">
    <input type="text" id="grade" placeholder="Grade" value="${student.grade}">
        `
    }else{
        document.getElementById("main").innerHTML=`<p>Student not found</p>`;
    }

}



