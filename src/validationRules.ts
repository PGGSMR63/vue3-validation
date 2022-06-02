const requiredValidator = (value: string): boolean => {
  if (value === null || value === undefined) { // value == null 
    return false;
  }

  return !!String(value).trim().length;
};

export const required = { required: requiredValidator };

const numericValidator = (value: string | number): boolean => {
  if (value === null || value === undefined || value === "") {
    return true;
  }

  const testValue = (val: string | number) => {
    const strValue = String(val);

    return /^[0-9]+$/.test(strValue);
  };

  return testValue(value);
};

export const isNumber = { isNumber: numericValidator };
