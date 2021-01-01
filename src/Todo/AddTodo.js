import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "1rem",
    gap: "10px",
  },

  input: {
    padding: "5px 10px",
    border: "1px solid #bfbfbf",
    borderRadius: "4px",
  },

  button: {
    background: "#fafafa",
    borderRadius: "4px",
    border: "1px solid #bfbfbf",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input
        placeholder="Текст задачи"
        value={value}
        onChange={onChange}
        style={styles.input}
      />
      <button style={styles.button}>Добавить</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
