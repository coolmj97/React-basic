import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 0,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'Javascript is for interactive' },
      ],
    };
  }

  getReadContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }
  }

  getContent() {
    let _title,
      _desc,
      _article,
      _content = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            this.max_content_id = this.max_content_id + 1;
            const _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              mode: 'read',
              selected_content_id: this.max_content_id,
              contents: _contents,
            });
          }}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(_id, _title, _desc) => {
            const _contents = Array.from(this.state.contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            this.setState({ mode: 'read', contents: _contents });
          }}
        ></UpdateContent>
      );
    }

    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          className="Subject"
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: 'welcome' });
          }}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={(id) => {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }}
        ></TOC>
        <Control
          onChangeMode={(_mode) => {
            if (_mode === 'delete') {
              if (this.state.selected_content_id === 0) {
                alert('삭제할 목록을 선택하세요.');
                return;
              }

              if (window.confirm('really?')) {
                const _contents = Array.from(this.state.contents);
                for (let i = 0; i < _contents.length; i++) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents,
                });
                alert('deleted!');
              }
            } else {
              this.setState({ mode: _mode });
            }
          }}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
