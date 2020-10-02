const useSWR = window.exports.default;

const urlCountries = 'https://www.dataformsjs.com/data/geonames/countries?order_by=country'
const fetcher = (url) => fetch(url).then(res => res.json())

function ShowCountries() {

    const { data, error } = useSWR(urlCountries, fetcher)

    // Include so developers can see how many times the hook runs and how the state changes
    console.log({ data, error })

    if (!data) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Error: {error}</span>
    }

    return (
        <>
            <h2>Countries</h2>
            <ul>
                {data && data.countries && data.countries.map(country => {
                    return (
                        <li key={country.iso}>
                            <i className={country.iso.toLowerCase() + ' flag'}></i>
                            <span>{country.country}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

class App extends React.Component {
    render() {
        return (
            <>
                <h1>SWR</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://github.com/vercel/swr" target="_blank" rel="noopener">https://github.com/vercel/swr</a>
                </p>

                <section>
                    <ShowCountries />
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
