import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyDocument from "../../components/MyDocument";
import { Button, DownloadLink, Form, Input } from "./style";
import { IMyForm } from "./types";

const Blog = () => {
  const [task, setTasks] = useState<IMyForm | null>(null);

  const { register, handleSubmit } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const MyForm = (data: IMyForm) => {
    setTasks(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(MyForm)}>
        <Input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
          placeholder="Enter name"
        />
        <Input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Изображение",
          })}
        />
        <Button type="submit">Сохранить</Button>
      </Form>
      {task?.name && task?.picture && (
        <DownloadLink
          document={<MyDocument name={task.name} picture={task.picture} />}
          fileName="form.pdf"
        >
          {({ loading, error }) => {
            try {
              if (loading) return "Загрузка...";
              if (error) throw new Error("Ошибка");
              return "Скачать";
            } catch (error) {
              console.error("Ошибка:", error);
              return "Ошибка";
            }
          }}
        </DownloadLink>
      )}
    </>
  );
};

export default Blog;