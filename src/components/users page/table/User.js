import { Link } from 'react-router-dom';

function User({ name, username, password, email, phone, status }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{password}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{status}</td>
      <td>
        <Link
          to='/edit_user'
          className='btn btn-secondary btn-sm me-2 p-1'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          title='Edit'
        >
          <i className='fas fa-edit action-icon fw-lighter'></i>
        </Link>
        <button
          className='btn btn-danger btn-sm p-1'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          title='Delete'
        >
          <i className='fas fa-trash-alt action-icon fw-lighter'></i>
        </button>
      </td>
    </tr>
  );
}

export default User;
