import { useState } from "react";
import { useForm } from "react-hook-form";

interface IMyForm {
  name: string;
  age: number;
  email: string;
}

function Story(): React.ReactElement {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const [tasks, setTasks] = useState<IMyForm[]>([]);
  // const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // useEffect(() => {
  //   const hasErrors =
  //     errors.name || errors.age || errors.email;
  //   setIsFormValid(!hasErrors);
  // }, [errors]);

  const saveElement = (data: IMyForm) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <input
          {...register("age", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <input
          {...register("email", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.email?.message}</div>
        <button type="submit" disabled={!isValid}>
          Сохранить
        </button>
      </form>

      {tasks.map((task) => (
        <p>
          {task.name} - {task.age} - {task.email}
        </p>
      ))}
    </>
  );
}

export default Story;
