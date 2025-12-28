import './ApplyHubBtn.css'

function ApplyHubBtn({ children, ...props }) {
  return (
    <div className='mb-3'>
      <button type='submit' className='ah-btn' {...props}>{children}</button>
    </div>
  );
}

export default ApplyHubBtn;