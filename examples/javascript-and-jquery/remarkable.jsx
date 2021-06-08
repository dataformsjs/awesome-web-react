
const Remarkable = remarkable.Remarkable;

// `MarkdownEditor` is based on example code from the main react site:
//     https://reactjs.org/
// Only slight changes have been made for formatting, layout,
// and passing a default value. 

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        const defaultValue = 'Hello, **world**!';
        const value = (props.value === undefined ? defaultValue : props.value);
        this.state = { value: value };
    }
  
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }
  
    render() {
        return (
            <section className="MarkdownEditor">
                <div className="editor">
                    <h3>Markdown</h3>
                    <textarea
                        id="markdown-content"
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className="rendered-html">
                    <h3>HTML</h3>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={this.getRawMarkup()}
                    />
                </div>
            </section>
        );
    }
}
  

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Remarkable Demo</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://github.com/jonschlinkert/remarkable" target="_blank" rel="noopener">https://github.com/jonschlinkert/remarkable</a>
                </p>

                <MarkdownEditor />
                <MarkdownEditor value="Hello, _world_!" />
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
