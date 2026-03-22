
const BtnContainer = ({ jobs, value, setValue }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={`job-btn ${index === value ? 'active-btn' : null}`}
            onClick={() => setValue(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer