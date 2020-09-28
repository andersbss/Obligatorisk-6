import React from 'react';

const Modal = () => (
  <aside className="popup">
    <div className="filter" />
    <div className="content">
      <div id="popupHeader">
        <h2>New todo</h2>
        <div className="closeBtn" id="closeBtn">
          &#10006
        </div>
      </div>
      <form id="newTodoForm">
        <label>Title</label>
        <input
          type="text"
          className="formInput"
          id="todoTitleInput"
          maxLength="20"
        />
        <label>
          Description
          <span id="charCount" />
        </label>
        <input
          type="text"
          className="formInput"
          maxLength="30"
          id="todoDescriptionInput"
          placeholder="Description"
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

export default Modal;
