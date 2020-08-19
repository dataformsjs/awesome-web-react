// NOTE - Map Code here is based on code from various examples at (MIT License):
//  https://www.react-simple-maps.io/examples/

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

// URL to a valid topojson file
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

// Countries over 100 million (100,000,000) population
// will end up with the darkest color.
const colorScale = window.d3.scaleLinear()
    .domain([0, 100000000])
    .range(['#ffd4cc', '#ff7d66']);

function MapChart({ setTooltipContent }) {
    return (
        <ComposableMap data-tip="">
            <ZoomableGroup zoom={1}>
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                <Geographies geography={geoUrl}>
                    {({geographies}) => geographies.map(geo => {
                        // console.log(geo.properties);
                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                    }
                                }
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: colorScale(geo.properties.POP_EST),
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#991700",
                                        outline: "none"
                                    },
                                }} />
                        );
                    })}
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
}

function App() {
    const [content, setContent] = React.useState('');
    return (
        <>
            <h1>React Simple Maps</h1>
            <p>
                <a href="/">🏠 Back to all Examples</a>
            </p>
            <p>
                <a href="https://www.react-simple-maps.io/" target="_blank" rel="noopener">https://www.react-simple-maps.io/</a>
            </p>
            <p>
                Countries are color coded based on population. Zoom with Mouse and Hover to view details.
            </p>

            <section>
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </section>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
