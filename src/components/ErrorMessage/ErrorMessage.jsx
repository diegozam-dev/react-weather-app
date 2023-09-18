const ErrorMessage = ({ error }) => {
  return (
    <section className="error__container">
      <p className="error__message">{error.message}</p>
    </section>
  );
};

export default ErrorMessage;
