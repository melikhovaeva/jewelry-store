import { useState } from 'react';
import React from 'react';
import { Page, Text, View, Document, PDFDownloadLink, Image } from '@react-pdf/renderer'; 
import { useForm } from "react-hook-form";
import { styles } from './style';
import { IMyForm } from './types';
 
interface IMyDocumentProps {
  name: string;
  picture: string;
}

const MyDocument:React.FC<IMyDocumentProps> = ({name, picture}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <View style={styles.section}>
          {picture && <Image src={`data:image/jpg;base64,${picture}`} />}
        </View>
      </Page>
    </Document>
  )
}


const App = () => {
  const [task, setTask] = useState<IMyForm>()

  const {
      register,
      handleSubmit,
      formState: {errors},
  } = useForm<IMyForm>({
      mode: "onBlur",
  })

  const saveElement = (data: IMyForm) => {
      setTask(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register('name', {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов"
            }
          }
          )}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
              required: "Загрузите изображение"
          })}
        />
        <div>{errors.name?.message}</div>
        <div>{errors.picture?.message}</div>
        <button type="submit">Сохранить</button>
      </form>
      {
        !!task?.name &&
        <PDFDownloadLink
          document={
            <MyDocument
              name={task.name}
              picture={task.picture}
            />
          } 
          fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      }
    </>
  )
}

export default App;