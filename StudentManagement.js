class StudentManagement {
    listStudent;
    name


    constructor() {

        this.listStudent = this.loadToLocalStorage();
        if (this.listStudent.length === 0) {
            let student1 = new Student(1, "Linh", "2001-07-15", "Male", "123456789", "Sai Gon", "C01");
            let student2 = new Student(2, "Khanh ", "2000-05-23", "Female", "0911349272", "Viet Nam", "C03");
            this.listStudent.push(student1);
            this.listStudent.push(student2);
            this.saveToLocalStorage();
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.listStudent));
    }

    loadToLocalStorage() {
        let data = localStorage.getItem('students');
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    add(newStudent) {
        this.listStudent.push(newStudent);
        this.saveToLocalStorage();
    }
    remove(index){
        this.listStudent.splice(index,1);
        this.saveToLocalStorage();
    }
    update(index,newStudent){
        this.listStudent[index]=newStudent;
        this.saveToLocalStorage();
    }

    searchById(studentId){
        for (let i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i].id === studentId){
                return this.listStudent[i];
            }

        }
        return null;


    }

}
