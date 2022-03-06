import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule }) => (
  <div>
    <h1> Módulo { activeModule.title } </h1>
    <span> Aula { activeLesson.title } </span>
  </div>
);

export default connect(state => (
  { 
  activeLesson: state.course.activeLesson, 
  activeModule: state.course.activeModule 
}))(Video);

// tem que botar esse COURSE por causa do combine reducers