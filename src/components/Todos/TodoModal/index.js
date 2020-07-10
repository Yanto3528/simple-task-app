import React from "react";
import Modal from "../../Modal";
import {
  InputGroup,
  Input,
  Textarea,
  Select,
} from "../../../styles/shared/Form";

const TodoModal = ({ title: header, data, onClose, onConfirm, onChange }) => {
  const { title, description, dueDate, type } = data;
  return (
    <Modal title={header} onClose={onClose} onConfirm={onConfirm}>
      <InputGroup>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">Description</label>
        <Textarea
          type="text"
          id="description"
          name="description"
          rows="5"
          value={description}
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="dueDate">Due Date</label>
        <Input
          type="date"
          id="dueDate"
          name="dueDate"
          value={dueDate}
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="type">Type</label>
        <Select id="type" name="type" value={type} onChange={onChange}>
          <option value="Important">Important</option>
          <option value="Urgent">Urgent</option>
          <option value="Other">Other</option>
        </Select>
      </InputGroup>
    </Modal>
  );
};

export default TodoModal;
