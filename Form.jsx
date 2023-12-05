import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p style={{ color: "red" }}>Email is required.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p style={{ color: "red" }}>Email is not valid.</p>
        )}<br/>

        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>Password is mandatory.</p>
        )}
        {errors.password&& errors.password.type === "pattern" && (
          <p style={{ color: "red" }}>password is not valid.</p>
        )}

        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}

export default App;
