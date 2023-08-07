import React, { useState } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import Students from './Student_Components/Students';
import Welcome from './Student_Components/Welcome';
import Addstudents from './Student_Components/Addstudents';
import Editstudent from './Student_Components/Editstudents';
import Student_data from './Data/Students_data'

import Teachers from './Teacher_Components/Teacher';
import Editteachers from './Teacher_Components/Editteachers';
import Addteachers from './Teacher_Components/Addteachers';
import Teacher_data from './Data/Teachers_data';


function App() {
  const [student, setstudent] = useState(Student_data);
  const [teacher, setteacher] = useState(Teacher_data);

  return (
    <div>
      <Switch>

      <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/student_dashboard">
          <Students student={student} setstudent={setstudent} />
        </Route>

        <Route path="/addstudents">
          <Addstudents student={student} setstudent={setstudent} />
        </Route>

        <Route path="/edit_student/:id">
          <Editstudent student={student} setstudent={setstudent} />
        </Route>

        <Route path="/teacher_dashboard">
          <Teachers teacher={teacher} setteacher={setteacher} />
        </Route>

        <Route path="/edit_teacher/:id">
          <Editteachers teacher={teacher} setteacher={setteacher} />
        </Route>

        <Route path="/add_teacher">
          <Addteachers teacher={teacher} setteacher={setteacher} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
