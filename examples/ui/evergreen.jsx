const useState = React.useState;

// Code here is based on examples from:
// https://evergreen.segment.com/components

const Pane = EvergreenUI.Pane;
const Heading = EvergreenUI.Heading;
const Text = EvergreenUI.Text;
const Link = EvergreenUI.Link;
const Button = EvergreenUI.Button;
const SelectMenu = EvergreenUI.SelectMenu;

function Paragraph(props) {
    return (
        <EvergreenUI.Paragraph
            marginTop={30}
            marginBottom={30}
            marginRight={60}
            marginLeft={60}
        >
            {props.children}
        </EvergreenUI.Paragraph>
    )
}

function CustomForm() {
    const [selected, setSelected] = useState(null);
    return (
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
            <Text size={300} marginBottom={20}>Dialog</Text>
            <SelectMenu
                title="Options with icons"
                options={[
                    { label: 'Apple', value: 'Apple', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Malus-Boskoop_organic.jpg' },
                    { label: 'Banana', value: 'Banana', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg' },
                ]}
                selected={selected}
                onSelect={item => setSelected(item.value)}
            >
                <Button>{selected === null ? 'Select option...' : selected}</Button>
            </SelectMenu>
        </Pane>
    );
}

class App extends React.Component {
    render() {
        return (
            <Pane
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={40}
            >
                <Heading size={900} marginBottom={30}>Evergreen</Heading>
                <Paragraph>Evergreen contains a large number of components. See the main link for more.</Paragraph>
                <Paragraph>
                    <Link href="/">🏠 Back to all Examples</Link>
                </Paragraph>
                <Paragraph>
                    <Link href="https://evergreen.segment.com/" target="_blank" rel="noopener">https://evergreen.segment.com/</Link>
                </Paragraph>

                <CustomForm />
            </Pane>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
