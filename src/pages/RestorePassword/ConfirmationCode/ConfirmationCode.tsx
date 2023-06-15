import React from 'react';

import { Button } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PinInput from 'react-pin-input';

type ConfirmationCodeType = {
  code: string;
};

export const ConfirmationCode = () => {
  const { handleSubmit, control } = useForm<ConfirmationCodeType>({
    defaultValues: { code: '' },
  });
  const onSubmit: SubmitHandler<ConfirmationCodeType> = async ({ code }) => {};

  const onResendCodeClick = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ConfirmationCode_Form">
      <h4 className="ConfirmationCode_Form_Title">Enter confirmation code</h4>
      <div className="ConfirmationCode_Form_Description">
        Enter the confirmation code we sent to your email
      </div>
      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <PinInput
            length={6}
            type="numeric"
            focus
            autoSelect={false}
            onComplete={value => {
              field.onChange(value);
            }}
          />
        )}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="ConfirmationCode_Form_Resend" onClick={onResendCodeClick}>
        Resend code
      </div>
    </form>
  );
};
