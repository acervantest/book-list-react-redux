import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
      return this.props.books.map((book) => {
        return(
          <li
            onClick={ () => this.props.selectBook(book) }
            key={ book.title }
            className="list-group-item">
            { book.title }
          </li>
        )
      })
  }

  render() {
    return(
      <ul className="col-sm-4 list-group">
        { this.renderList() }
      </ul>
    )
  }
}
//whatever is returned, will show up as props inside of BookList
function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
