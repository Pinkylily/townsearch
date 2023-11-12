import "./fallbackOnError.css";

const FallbackOnError = () => {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="label-normal m-5 text-left text-black">
        Une erreur est survenue
      </p>
      <button
        className="fallbackOnError__button bg-normal cursor-pointer rounded-xl border-none px-5 py-3 text-black"
        onClick={onReload}
      >
        Recharger la page
      </button>
    </div>
  );
};

export default FallbackOnError;
