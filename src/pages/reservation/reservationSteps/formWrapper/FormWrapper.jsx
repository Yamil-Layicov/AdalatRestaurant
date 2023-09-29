import './formWrapper.scss'

export function FormWrapper({ title, children }) {
  return (
    <div className='formWrapper'>
      <h3>
        {title}
      </h3>
      <div
      >
        {children}
      </div>
    </div>
  );
}
