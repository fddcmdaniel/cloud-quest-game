import { useEffect, useContext } from "react";
import { LoginContext } from "../../Pages/Signup";

const PasswordStrength = (password: string) => {
  const { setPasswordStrength, setIsButtonDisabled } = useContext(LoginContext);

  useEffect(() => {
    if (password.length <= 4) {
      setPasswordStrength("Minímo de caracteres 4");
      setIsButtonDisabled(true);
      return;
    } else {
      const capsCount = (password.match(/[A-Z]/g) || []).length;
      const smallCount = (password.match(/[a-z]/g) || []).length;
      const numberCount = (password.match(/[0-9]/g) || []).length;
      const symbolCount = (password.match(/\W/g) || []).length;
      if (capsCount < 1) {
        setPasswordStrength("Pelo menos um letra maiúscula");
        setIsButtonDisabled(true);
        return;
      } else if (smallCount < 1) {
        setPasswordStrength("Pelo menos um letra minúscula");
        setIsButtonDisabled(true);
        return;
      } else if (numberCount < 1) {
        setPasswordStrength("Pelo menos um número");
        setIsButtonDisabled(true);
        return;
      } else if (symbolCount < 1) {
        setPasswordStrength("Pelo menos um caracter especial (*#.-)");
        setIsButtonDisabled(true);
        return;
      }
      setIsButtonDisabled(false);
    }
  }, [password]);

  return null;
};

export default PasswordStrength;
