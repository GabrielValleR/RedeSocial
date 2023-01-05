import React, { useState } from 'react';
import { Checked, ErrorLabel } from './styles';
import { CheckBoxProps as CheckProps } from '@react-native-community/checkbox';
import { FieldError } from 'react-hook-form';

interface Check extends CheckProps {
  error?: FieldError | undefined;
}

const Checkbox: React.FC<Check> = ({ error = undefined, ...rest }) => {
  const [toggleCheck, setToggleCheck] = useState(false);

  function handleChecked(){
    if (!toggleCheck) {
      setToggleCheck(true);
    } else {
      setToggleCheck(false);
    }
  }
  return (
    <>
      <Checked
        {...rest}
      />
      {error && <ErrorLabel>{error.message}</ErrorLabel>}
    </>
  );
};

export default Checkbox;
