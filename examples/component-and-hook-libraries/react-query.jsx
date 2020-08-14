const useQuery = ReactQuery.useQuery

const urlCountries = 'https://www.dataformsjs.com/data/geonames/countries?order_by=country'
const fetchCountries = () => fetch(urlCountries).then(res => res.json())

function ShowCountries() {

    // Using optional properties with `useQuery()` so that `fetch` is only 
    // called once as the data for this API never or rarely changes.
    const { isLoading, isError, data, error } = useQuery('countries', fetchCountries, {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    // Include so developers can see how many times the hook runs and how the state changes
    console.log({ isLoading, isError, data, error })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <h2>Countries</h2>
            <ul>
                {data && data.countries && data.countries.map(country => {
                    return (
                        <li key={country.iso}>
                            <i class={country.iso.toLowerCase() + ' flag'}></i>
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
                <h1>React Query</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://github.com/tannerlinsley/react-query" target="_blank" rel="noopener">https://github.com/tannerlinsley/react-query</a>
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
