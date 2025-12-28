import './ApplyHubBtn.css'

function ApplyHubBtn({ children }) {
  return (
    <div className='mb-3'>
      <button type='submit' className='ah-btn'>{children}</button>
    </div>
  );
}

export default ApplyHubBtn;