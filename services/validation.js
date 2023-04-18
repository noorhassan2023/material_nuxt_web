/* eslint-disable no-confusing-arrow */
const validateEmail = (email) => {
  if (!email) {
    return false;
  }
  // eslint-disable-next-line operator-linebreak
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const RULES = {
  required: (value, rules) => {
    const isArr = Array.isArray(value);

    if (isArr && value.length > 0) {
      return true;
    } if ((!!value || value === 0) && !rules.file) {
      return true;
    }

    if (rules && rules.file && value && value.length) {
      return true;
    }

    return 'This field is required';
  },
  min: (value, min) => value && value.length >= min ? true : `required at least ${min} chars`,
  max: (value, max) => value && value.length <= max ? true : `required a maximum of ${max} chars`,
  email: (email) => validateEmail(email) || 'Please add a valid email',
  confirmPassword: (value, password) => value && password && value === password ? true : 'Passwords are not similar',
  number: (value) => typeof value === 'number' || 'Please add a valid number',
  string: (value) => typeof value === 'string' || 'Please add a valid value',
};

const validateRules = (rules, value, extra) => {
  let error = null;
  let isValid = true;

  if (rules) {
    // email
    if (value && rules.email && RULES.email(value) !== true) {
      isValid = false;
      error = RULES.email(value);
    }

    if (rules.number) {
      if (value !== 'undefined' && rules.min && +value < rules.min) {
        isValid = false;
        error = `Must be bigger than or equal to ${rules.min}`;
      }
      if (value !== 'undefined' && rules.max && +value > rules.max) {
        isValid = false;
        error = `Must be less than ${rules.max}`;
      }
    } else if (rules.file) {
      if (value && value.length && rules.min && value.length < rules.min) {
        isValid = false;
        error = `Files numbers Must be bigger than or equal to ${rules.min}`;
      }
      if (value && value.length && rules.max && value.length > rules.max) {
        isValid = false;
        error = `Files numbers Must be less than ${rules.max}`;
      }
    } else {
      // min
      if (value && rules.min && RULES.min(value, rules.min) !== true) {
        isValid = false;
        error = RULES.min(value, rules.min);
      }

      // max
      if (value && rules.max && RULES.max(value, rules.max) !== true) {
        isValid = false;
        error = RULES.max(value, rules.max);
      }
    }

    // confirmPassword
    if (value && rules.confirmPassword && extra && extra.password && RULES.confirmPassword(value, extra.password) !== true) {
      isValid = false;
      error = RULES.confirmPassword(value, extra.password);
    }

    // number
    if (value && rules.number && RULES.number(value) !== true) {
      isValid = false;
      error = RULES.number(value);
    }

    // string
    if (value && rules.string && RULES.string(value) !== true) {
      isValid = false;
      error = RULES.string(value);
    }

    // required
    if (rules.required === true && RULES.required(value, rules) !== true) {
      isValid = false;
      error = RULES.required(value, rules);
    }
  }

  return { error, isValid };
};

const validateAllData = (formData) => {
  if (!formData) {
    return {
      error: 'no data available', touched: false, isValid: false, data: null,
    };
  }

  let error = null;
  let touched = true;
  let isValid = true;
  const data = {};

  Object.entries(formData).forEach(
    ([key, val]) => {
      data[key] = val.value !== 'undefined' && val.value !== null ? val.value : null;
      if (val.error) {
        error = { [key]: val.error };
      }
      if (!val.touched) {
        touched = false;
      }
      if (!val.isValid && val.error) {
        isValid = false;
      }
    },
  );

  return {
    error, touched, isValid, data,
  };
};

export default { RULES, validateRules, validateEmail, validateAllData };
