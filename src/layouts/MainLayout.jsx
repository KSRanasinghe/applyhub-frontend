import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function MainLayout({ children }) {
  const { token, logout } = useAuth();

  return (
    <div>
      <nav style={{ padding: '1rem', background: '#222' }}>
        <Link to="/dashboard" style={{ color: '#fff', marginRight: '1rem' }}>
          Dashboard
        </Link>

        <Link to="/add-job" style={{ color: '#fff', marginRight: '1rem' }}>
          Add Job
        </Link>

        {!token ? (
          <>
            <Link to="/login" style={{ color: '#fff', marginRight: '1rem' }}>
              Sign In
            </Link>

            <Link to="/register" style={{ color: '#fff' }}>
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        )}
      </nav>

      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;