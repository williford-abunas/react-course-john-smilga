import useToggle from './useToggle';

const ToggleExample = () => {

  const { value, toggleValue } = useToggle(false);
  
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggleValue}>
        toggle
      </button>
      {value && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
