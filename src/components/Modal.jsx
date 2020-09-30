import React, { useState } from 'react';

const Modal = ({ visibility, toggleModal, addNewTodo, deleteTodo }) => {
  const [charLength, setCharLength] = useState(50);

  const handleChange = (e) => {
    setCharLength(50 - e.target.value.length);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const [title, desc, author] = e.target;

    addNewTodo({
      id: null,
      title: title.value,
      description: desc.value,
      author: author.value,
    });
    toggleModal();
  };

  return (
    <aside className={`popup ${visibility}`} id="popup">
      <div className="filter" id="filter" />
      <div className="content">
        <div id="popupHeader">
          <h2>New todo</h2>
          <div className="closeBtn" id="closeBtn" onClick={toggleModal}>
            x
          </div>
        </div>
        <form id="newTodoForm" onSubmit={handleFormSubmission}>
          <label>Title</label>
          <input
            type="text"
            className="formInput"
            id="todoTitleInput"
            maxLength="20"
          />
          <label>
            Description
            <span id="charCount">({charLength} characters left)</span>
          </label>
          <input
            type="text"
            className="formInput"
            maxLength="50"
            id="todoDescriptionInput"
            placeholder="Description"
            onChange={handleChange}
          />
          <label>Author</label>
          <input
            type="text"
            className="formInput"
            maxLength="50"
            id="todoAuthorInput"
            placeholder="Author"
            required
          />
          <input id="submitBtn" type="submit" value="Create" />
        </form>
      </div>
    </aside>
  );
};

export default Modal;
