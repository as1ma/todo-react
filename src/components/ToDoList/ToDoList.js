import PropTypes from "prop-types";

function ToDoList({ children }) {
  return <ul role="list">{children}</ul>;
}

ToDoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToDoList;
