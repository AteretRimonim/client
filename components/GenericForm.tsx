import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import Input from './Input';

type FieldType = 'text' | 'number' | 'email' | 'password';

type FormField = {
  name: string;
  placeholder: string;
  fieldType: FieldType;
};

type GenericFormProps = {
  fields: FormField[];
  onSubmit: (formData: { [key: string]: string }) => void;
};

const GenericForm: React.FC<GenericFormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <Input
          key={field.name}
          value={formData[field.name] || ''}
          fieldType={field.fieldType}
          onChangeText={(text) => handleChange(field.name, text)}
          placeholder={field.placeholder}
        />
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default GenericForm;
