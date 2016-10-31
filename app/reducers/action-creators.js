export const LOAD_STARS = 'LOAD_STARS';
import axios from 'axios'

export const loadStars = (stars) => ({
  type: LOAD_STARS,
  stars
});


export const loadStarsThunk = function () {
  return function (dispatch) {
    fetch('/api/stars')
      .then(res => res.json())
      .then(stars => {
        dispatch(loadStars(stars));
      })
      .catch(err => console.error(err));
  };
};


// export const onSend = function(state) {
//      axios.post('/api/stars', state)
//       .then(function(){
//         console.log("IS THIS HAPPENINNGG")

//       })
//       .catch(err => console.error(err))
//     }




// return function() {
//
//       console.log("THIS IS STATE", state)
//     fetch('/api/stars', {
//           method: 'post',
//           body: state
//           })
//     .then(res => res.json())
//     .catch(err => console.error(err))
//       }
