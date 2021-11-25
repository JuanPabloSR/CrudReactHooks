import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    // console.log(props.currentUser)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
      defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name);
  setValue('username', props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentUser.id

    props.updateUser(props.currentUser.id, data)

    //limpiar campos
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

      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
