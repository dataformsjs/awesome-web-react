const Pane = EvergreenUI.Pane;
const Text = EvergreenUI.Text;
const Button = EvergreenUI.Button;
const SelectMenu = EvergreenUI.SelectMenu;

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Evergreen</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://evergreen.segment.com/" target="_blank">https://evergreen.segment.com/</a>
                </p>

                <Pane
                    elevation={4}
                    float="left"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text>Elevation 4</Text>
                    <Text size={300}>Dialog</Text>
                    <SelectMenu
                        title="Options with icons"
                        options={[
                            { label: 'Apple', value: 'Apple', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Malus-Boskoop_organic.jpg' },
                            { label: 'Banana', value: 'Banana', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg' },
                        ]}
                        >
                        <Button>Select option...</Button>
                    </SelectMenu>
                </Pane>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
