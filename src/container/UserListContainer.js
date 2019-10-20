import {connect} from 'react-redux';
import {getData} from '../actions/user.action';
import UserList from '../components/userList/UserList';

const mapStateToProps = state => {
  return {
    data: state.user.data,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData()),
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
export default UserListContainer;
