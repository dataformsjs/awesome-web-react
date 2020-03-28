// NOTE - this code is based on the getting started demo:
// https://ant.design/docs/react/getting-started

const DatePicker = antd.DatePicker;
const message = antd.message;
const Button = antd.Button;            

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date:null };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(date) {
        message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
        this.setState({ date });
    }
    
    handleClick() {
        message.info('Hello World');
    }

    render() {
        const { date } = this.state;
        return (
            <>
                <h1>Ant Design Demo</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://ant.design/" target="_blank">https://ant.design/</a>
                </p>

                <section>
                    <DatePicker onChange={this.handleChange} />
                    <div>
                      Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
                    </div>
                    <div>
                        <Button type="primary" onClick={this.handleClick}>
                          Primary Button
                        </Button>
                    </div>
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
