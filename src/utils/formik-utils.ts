import type { FormikProps } from 'formik';
import { objectAccessor } from './object-utils';

export function getTextFieldFormikHelperText<Values extends Record<string, any>>(
  formik: FormikProps<Values>,
  key: string,
  helperText?: string,
): string | undefined {
  return !!objectAccessor(formik.touched, key) && objectAccessor(formik.errors, key)
    ? (objectAccessor(formik.errors, key) as string)
    : helperText;
}

export function getTextFieldFormikError<Values extends Record<string, any>>(
  formik: FormikProps<Values>,
  key: string,
): boolean {
  return !!objectAccessor(formik.touched, key) && !!objectAccessor(formik.errors, key);
}

export function getTextFieldFormikHelperTextAndErrorProps<Values extends Record<string, any>>(
  formik: FormikProps<Values>,
  key: string,
  helperText?: string,
) {
  return {
    error: getTextFieldFormikError(formik, key),
    helperText: getTextFieldFormikHelperText(formik, key, helperText),
  };
}

export function getTextFieldFormikProps<Values extends Record<string, any>>(
  formik: FormikProps<Values>,
  key: string,
  helperText?: string,
) {
  return {
    ...formik.getFieldProps(key),
    ...getTextFieldFormikHelperTextAndErrorProps(formik, key, helperText),
  };
}

export function getCheckFieldFormikProps<Values extends Record<string, any>, T = any>(
  formik: FormikProps<Values>,
  key: string,
  checkedValue: T = true as unknown as T,
  // unCheckedValue: T = false as unknown as T
) {
  const textFieldProps = getTextFieldFormikProps(formik, key);

  const value = typeof checkedValue === 'boolean' ? !!textFieldProps.value : textFieldProps.value;

  return {
    ...textFieldProps,
    value,
    checked: value === checkedValue,
  };
}
