import axios from 'axios';
import Vue from 'vue';

var vm = new Vue({
  el: "#app",
  data: {
    students: [],
    search: "",
    newStudentName: "",
    newStudentGroup: "",
    newStudentYear: "",
    newStudentPractice: false,
  },
  mounted: function () {
    axios.get('http://34.82.81.113:3000/students').then((response) => {
      console.log(response.data);
      this.students = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    removeStudent(id) {
      this.students = this.students.filter((student) => student.id !== id);
    },
    isMatched(student) {
      return this.search && student.name.includes(this.search);
    },
    addStudent() {
      const newStudent = {
        id: this.students.length + 1,
        name: this.newStudentName,
        group: this.newStudentGroup,
        year: parseInt(this.newStudentYear),
        practice: this.newStudentPractice,
      };
      this.students.push(newStudent);
      this.newStudentName = "";
      this.newStudentGroup = "";
      this.newStudentYear = "";
      this.newStudentPractice = false;
    },
  },
});
