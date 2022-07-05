import StarRating from 'react-bootstrap-star-rating';
import React, { Component } from 'react';
 
class RatingStars extends Component {
  render() {
    return (
      <StarRating
        defaultValue={5}
        min={0}
        max={5}
        step={1} />
    );
  }
}
 export default RatingStars;
