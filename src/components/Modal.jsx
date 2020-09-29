import React from 'react';

const Modal = ({ visibility, toggleModal, newTodo }) => {
  // const [todo, setTodo] = useState(null);

  const generateId = () => 1; // Fix ID handling

  /*
  const dateZeroHandler = (num) => (num < 10 ? `0${num}` : num);

  const formatYear = (year) => {
    const splitYear = year.toString().split('');
    return `${splitYear[2]}${splitYear[3]}`;
  };

  
  const getDate = () => {
    const date = new Date();
    const day = dateZeroHandler(date.getDate());
    const month = dateZeroHandler(date.getMonth() + 1);
    const year = formatYear(date.getFullYear());
    return `${day}.${month}.${year}`;
  };
  */

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const [formTitle, formDescription, formAuthor] = e.target;

    newTodo({
      title: formTitle.value,
      description: formDescription.value,
      author: formAuthor.value,
      id: generateId(),
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
            placeholder="Title"
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
};

export default Modal;
