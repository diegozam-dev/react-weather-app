const ErrorMessage = ({ error }) => {
  return (
    <>
      <h2 className="error__message">{error.message}</h2>
    </>
  );
};

export default ErrorMessage;
