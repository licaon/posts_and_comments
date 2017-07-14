import { connect } from 'react-redux';
import { get } from 'lodash';

import Search from 'src/components/filters/search';
import { FiltersActions } from 'src/actions';
import { getSearchFiltersValue } from 'src/selectors/filters-selectors';

const mapStateToProps = state => ({
  value: get(getSearchFiltersValue(state), 'content.value', ''),
});

const mapDispatchToProps = dispatch => ({
  onValueChange: (value) => {
    dispatch(FiltersActions.addSearchFilter({ value, type: 'content', fields: ['title', 'body'] }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
