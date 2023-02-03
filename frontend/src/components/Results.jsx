function Results(prix, activité, equivalent, image) {
  return (
    <div className="resultsItem">
      <h3>{prix}</h3>
      <h4>
        {activité}
        <br />
        {equivalent}
      </h4>
      <h4>{image}</h4>
    </div>
  );
}

export default Results;
