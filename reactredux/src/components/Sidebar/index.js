import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson }) => (
  <div>
    {modules.map(module => (
      <div key={module.id}>
        <h1>{module.title}</h1>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}> {lesson.title} 
            <button onClick={ _ => toggleLesson(module, lesson)}>Selecionar</button>
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