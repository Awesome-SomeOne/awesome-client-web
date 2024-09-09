import * as S from "./styles";

const Toast = ({ message }: { message: string }) => {
  return (
    <S.Toast
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: "-50%" }}
      exit={{ opacity: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {message}
    </S.Toast>
  );
};
export default Toast;
