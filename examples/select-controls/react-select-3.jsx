
import Select from 'https://cdn.pika.dev/react-select@3.1.0';

// List of largest countries (by population)
// https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)
// https://www.geonames.org/countries/
const options = [
    { value: 'CN', label: 'China' },
    { value: 'IN', label: 'India' },
    { value: 'US', label: 'United States' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'BR', label: 'Brazil' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'RU', label: 'Russia' },
    { value: 'JP', label: 'Japan' },
    { value: 'MX', label: 'Mexico' },
    { value: 'PH', label: 'Philippines' },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSingleChange = this.handleSingleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.state = {
            country: options[options.length - 1],
            countries: [options[0], options[1], options[2]],
        };
    }

    handleSingleChange(item) {
        console.log('Single Select Changed:');
        console.log(item);
        this.setState({
            country: item,
        });
    }

    handleMultiChange(items) {
        console.log('Multi Select Changed:');
        console.log(items);
        this.setState({
            countries: items,
        })
    }

    render() {
        return (
            <>
                <h1>React Select</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://react-select.com/home" target="_blank" rel="noopener">https://react-select.com/home</a>
                </p>
                <p>
                    This page uses React Select Version 3 and only works with Modern Browsers. For a React Select 2 demo that works with all browsers see <a href="react-select.htm">react-select.htm</a>.
                </p>

                <section>
                    <Select
                        defaultValue={this.state.country}
                        onChange={this.handleSingleChange}
                        className="react-select"
                        placeholder={'Single Select'}
                        isClearable
                        options={options} />
                </section>

                <section>
                    <strong>Selected Country:</strong> {(this.state.country === null ? null : this.state.country.value)}
                </section>

                <section>
                    <Select
                        defaultValue={this.state.countries}
                        onChange={this.handleMultiChange}
                        className="react-select"
                        isMulti
                        placeholder={'Multi Select'}
                        options={options} />
                </section>

                <section>
                    <strong>Selected Countries:</strong> {this.state.countries && this.state.countries.map(i => i.value).join(', ')}
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
