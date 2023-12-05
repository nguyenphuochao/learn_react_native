// validate email
export const isValidEmail = (stringEmail) =>  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
// validate password
export const isValidPass = (stringPass) => stringPass.length >= 3;