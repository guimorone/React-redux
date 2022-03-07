import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

import { Button } from 'react-bootstrap';

const Sidebar = ({ modules, toggleLesson }) => (
  <div>
    {modules.map(module => (
      <div key={module.id}>
        <h1>{module.title}</h1>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}> {lesson.title} 
            // como toggleLesson tem o mesmo nome da action declarada na outra pasta (pasta de actions), podemos só escrever dessa forma abaixo
            <Button variant="secondary" className="m-1" onClick={ _ => toggleLesson(module, lesson)}>Selecionar</Button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});
// tem que botar esse COURSE por causa do combine reducers

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
