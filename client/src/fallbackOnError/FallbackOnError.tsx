import "./fallbackOnError.css";

const FallbackOnError = () => {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className="fallbackOnError">
      <p className="fallbackOnError__text">Une erreur est survenue</p>
      <button className="fallbackOnError__button" onClick={onReload}>
        Recharger la page
      </button>
    </div>
  );
};

export default FallbackOnError;
