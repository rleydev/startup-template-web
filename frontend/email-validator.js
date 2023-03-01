const VALID_EMAIL_ENDINGS = ['gmail.com', 'hotmail.com'];

export function validate(email) {

  if (typeof email === 'string' && email.length !== 0) {
    if (email.startsWith('@')) {
      return false;
    } else {
      const emailEnding = email.split('@')[1];
      return VALID_EMAIL_ENDINGS.includes(emailEnding)
    }
  } else {
    return false
  }
}

export function validateAsync(email) {
  return new Promise((resolve) => {
    if (typeof email === 'string' && email.length !== 0) {
      if (email.startsWith('@')) {
        resolve(false);
      } else {
        const emailEnding = email.split('@')[1];
        if (VALID_EMAIL_ENDINGS.includes(emailEnding)) {
          resolve(true);
        } else {
          resolve(false);
          throw new Error('Error!')
        }
      }
    } else {
      resolve(false);
      throw new Error('Error!')
    }
  });
}

export function validateWithLog(email) {
  if (typeof email === 'string' && email.length !== 0) {
    if (email.startsWith('@')) {
      console.log(false)
      return false;
    } else {
      const emailEnding = email.split('@')[1];
      console.log(VALID_EMAIL_ENDINGS.includes(emailEnding))
      return VALID_EMAIL_ENDINGS.includes(emailEnding)
    }
  } else {
    console.log(false)
    return false
  }
}