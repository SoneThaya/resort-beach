import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  static contextType = RoomContext

  render() {
    

    return (
      <div>
        from FeaturedRooms 
      </div>
    );
  }
}

export default FeaturedRooms;