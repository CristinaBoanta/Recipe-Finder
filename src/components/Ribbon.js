const Ribbon = (props) => {
  const { label } = props;
  return (
    <div className="ribbon-wrapper-green">
      <div className="ribbon-green">{label}</div>
    </div>
  );
};

export default Ribbon;
