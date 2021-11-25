import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);

    props.addUser(data);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: {
            value: true,
          },
        })}
      />
      {errors.name?.type === "required" && "name is required"}

      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: {
            value: true,
          },
        })}
      />
      {errors.username && "username is required"}

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
