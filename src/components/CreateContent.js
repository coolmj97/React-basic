import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
