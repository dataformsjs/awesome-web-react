
// NOTE - most of the examples are modified from the docs:
// https://styled-components.com/docs/basics


const scale = styled.keyframes`
    0%, 100% { transform: scale3d(0.8, 0.8, 0.8); }
    50% { transform: scale3d(1, 1, 1); }
`;

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
    animation: ${scale} 4s linear infinite;
`;

const Page = styled.div`
    padding: 20px;
    height: 100%;
    background: papayawhip;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    padding: 40px;
    margin: 20px;
`;

const Link = styled.a`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 1em 2em;
    border: 2px solid palevioletred;
    border-radius: 8px;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        text-decoration: underline;
    }
`;

class App extends React.Component {
    render() {
        return (
            <Page>
                <Title>🎉 Styled Components 💅</Title>
                <Text>
                    <Link href="/">🏠 Back to all Examples</Link>
                </Text>
                <Text>
                    <Link
                        primary
                        href="https://styled-components.com/"
                        target="_blank"
                        rel="noopener"
                    >https://styled-components.com/</Link>
                </Text>
            </Page>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
