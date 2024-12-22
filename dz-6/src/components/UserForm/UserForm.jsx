import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserTable from "../UserTable/UserTable";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);

  // Добавление пользователя
  const addUser = (data) => {
    setUsers([...users, data]);
    reset(); // Очистка формы
  };

  // Очистка таблицы
  const clearTable = () => {
    setUsers([]);
  };

  return (
    <div className={styles.container}>
      {/* Форма */}
      <form onSubmit={handleSubmit(addUser)} className={styles.form}>
        <div className={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Username:</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label>Phone:</label>
          <input
            type="text"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label>Website:</label>
          <input type="text" {...register("website")} />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.addButton}>
            Создать
          </button>
          <button
            type="button"
            onClick={clearTable}
            className={styles.clearButton}
            disabled={users.length === 0}
          >
            Очистить таблицу
          </button>
        </div>
      </form>

      {/* Таблица */}
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default UserForm;
