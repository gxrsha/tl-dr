const Loading = () => {
  return (
    <>
      <iframe
        src="https://giphy.com/embed/Q1LPV0vs7oKqc"
        width="480"
        height="480"
        frameBorder="0"
        className="mt-10 giphy-embed"
        allowFullScreen
      ></iframe>
      <div className="mt-5 text-sm text-slate-800">Generating summary ...</div>
    </>
  );
};

export default Loading;
