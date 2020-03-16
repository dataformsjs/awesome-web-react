
// List of largest countries (by population)
// https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)
// https://www.geonames.org/countries/
const countries = [
    { iso: 'CN', name: 'China' },
    { iso: 'IN', name: 'India' },
    { iso: 'US', name: 'United States' },
    { iso: 'ID', name: 'Indonesia' },
    { iso: 'BR', name: 'Brazil' },
    { iso: 'PK', name: 'Pakistan' },
    { iso: 'BD', name: 'Bangladesh' },
    { iso: 'NG', name: 'Nigeria' },
    { iso: 'RU', name: 'Russia' },
    { iso: 'JP', name: 'Japan' },
    { iso: 'MX', name: 'Mexico' },
    { iso: 'PH', name: 'Philippines' },
];

// Copied and modified from: https://reactjs.org/docs/integrating-with-other-libraries.html
class Chosen extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.chosen(this.props.options);

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <select className="chosen-select" ref={el => this.el = el} data-placeholder={this.props.placeholder}>
                {this.props.children}
            </select>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.state = {
            country: 'MX'
        };
    }

    handleCountryChange(event) {
        this.setState({
            country: event.target.value,
        });
    }

    render() {
        return (
            <>
                <h1>jQuery Chosen with React</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://harvesthq.github.io/chosen/" target="_blank">https://harvesthq.github.io/chosen/</a>
                </p>

                <section>

                    <Chosen
                        onChange={this.handleCountryChange}
                        options={{ allow_single_deselect: true }}
                        placeholder="-- Select a Country (Optional) --"
                    >
                        <option value=""></option>
                        {countries.map(country => {
                            return (
                                <option key={country.iso} value={country.iso} selected={country.iso === this.state.country}>{country.name}</option>
                            )
                        })}
                    </Chosen>
                </section>

                <section>
                    <strong>Selected Country:</strong> {this.state.country}
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
