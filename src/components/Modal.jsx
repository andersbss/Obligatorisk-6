import React, { useState } from 'react';

const Modal = ({ visibility, toggleModal, newTodo }) => {
  const [charLength, setCharLength] = useState(50);

  const handleChange = (e) => {
    setCharLength(50 - e.target.value.length);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const [formTitle, formDescription, formAuthor] = e.target;

    newTodo({
      title: formTitle.value,
      description: formDescription.value,
      author: formAuthor.value,
    });

    toggleModal();
  };

  return (
    <aside className={`popup ${visibility}`} id="popup">
      <div className="filter" id="filter" onClick={toggleModal} />
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
            placeholder="Title"
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
