import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import useForm from "../../hooks/useForm";

import {
  Form,
  InputGroup,
  Input,
  Select,
  Textarea,
} from "../../styles/shared/Form";
import Button from "../../styles/shared/Button";

const CreateTodo = ({ addTodo, history }) => {
  const { data, setData, errors, onChange, handleSubmit } = useForm({
    title: "",
    description: "",
    dueDate: moment().format("YYYY-MM-DD"),
    type: "",
  });
  const { title, description, dueDate, type } = data;

  const onSubmit = () => {
    addTodo(data);
    setData({ title: "", description: "", dueDate: "" });
    history.push("/");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <h1 style={{ textAlign: "center" }}>Create a new todo</h1>
      <InputGroup>
        <label htmlFor="title">Todo Title</label>
        <Input
          type="text"
          id="title"
          placeholder="eg. Learn React..."
          name="title"
          value={title}
          onChange={onChange}
        />
        {errors && errors.title && <p>* Title is required</p>}
      </InputGroup>
      <InputGroup>
        <label htmlFor="title">Description</label>
        <Textarea
          placeholder="eg. Learning how to create a website with React"
          rows="5"
          id="description"
          name="description"
          value={description}
          onChange={onChange}
        />
        {errors && errors.description && <p>* Description is required</p>}
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
        {errors && errors.dueDate && <p>* Due date is required</p>}
      </InputGroup>
      <InputGroup>
        <label htmlFor="type">Type</label>
        <Select name="type" id="type" value={type} onChange={onChange}>
          <option value="">-Select type-</option>
          <option value="Important">Important</option>
          <option value="Urgent">Urgent</option>
          <option value="Other">Other</option>
        </Select>
        {errors && errors.type && <p>* Type is required</p>}
      </InputGroup>
      <Button block>Create</Button>
    </Form>
  );
};

export default connect(null, { addTodo })(CreateTodo);
