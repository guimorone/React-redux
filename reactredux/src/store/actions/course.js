// type = ação sendo realizada
export function toggleLesson(module, lesson) {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
    };
 }