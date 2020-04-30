import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleChangeAuthor = event => {
    this.setState({
      author: event.target.value
    })
  }

  handleChangeContent = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const newQuote = {
      id: uuid(),
      author: this.state.author,
      content: this.state.content,
      votes: 0
    }
    this.props.addQuote(newQuote)
    this.setState({
      content: '',
      author: ''
    })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        onChange={this.handleChangeContent}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        onChange={this.handleChangeAuthor}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quote) => {
      dispatch(addQuote(quote))
    }
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
