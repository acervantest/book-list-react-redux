import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if(!this.props.book){
      return <div>Select a book to get started</div>
    }

    return (
      <div>
        Detail for:<br />
        Title: { this.props.book.title }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
