import s from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  
  return (
    <div className={s.wrapper}>
      <strong className={s.alert}>Ooops...something went wrong</strong>
    </div>
  );
};
export default ErrorMessage;
