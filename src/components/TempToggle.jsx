
function TempToggle({ unit, setUnit }) {

  return (
    <div className="temp-toggle">
      <div className={`slider-bg ${unit === 'imperial' ? 'right' : ''}`}></div>
      <button
        className={`temp-btn ${unit === 'metric' ? 'active' : ''}`}
        onClick={() => setUnit('metric')}
      >
        °C
      </button>
      <button
        className={`temp-btn ${unit === 'imperial' ? 'active' : ''}`}
        onClick={() => setUnit('imperial')}
      >
        °F
      </button>
    </div>
  );
}

export default TempToggle;