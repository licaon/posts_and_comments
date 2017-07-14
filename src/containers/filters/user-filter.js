import { connect } from 'react-redux';
import { get } from 'lodash';

import UserFilter from 'src/components/filters/user-filter';
import { FiltersActions } from 'src/actions';
import { getUsers } from 'src/selectors/users-selectors';
import { getSelectFiltersValue } from 'src/selectors/filters-selectors';

const mapStateToProps = state => ({
  value: get(getSelectFiltersValue(state), 'user.value', ''),
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  onValueChange: (value) => {
    dispatch(FiltersActions.addSelectFilter({ value, type: 'user', fields: ['userId'] }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFilter);
