
function HelloMessage(props) {
    return (
        <div>
            Hello {props.name}!
        </div>
    );
}

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Template Page</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://www.example.com/" target="_blank">https://www.example.com/</a>
                </p>

                <section>
                    <HelloMessage name="World" />
                    <HelloMessage name="World" />
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
