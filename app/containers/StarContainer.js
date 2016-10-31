import { connect } from 'react-redux';
import { loadStarsThunk } from '../reducers/action-creators';
import Star from '../components/Star';

const mapStateToProps = function (state) {
  return {
    stars: state.stars
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadStars: function () {
      dispatch(loadStarsThunk());
    }
  };
};

export default connect(mapStateToProps,
mapDispatchToProps)(Star);

