// NOTE - Most code here is copied directly from the main demo:
//     https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
// Some minor changes were made.

const DndProvider = ReactDnD.DndProvider;
const Backend = ReactDnDHTML5Backend.default;
const useDrag = ReactDnD.useDrag;
const useDrop = ReactDnD.useDrop;
		
const ItemTypes = {
    BOX: 'box',
};

const styleDustbin = {
    height: '12rem',
    width: '12rem',
    margin: 'auto',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
}
const Dustbin = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    // Using `Object.assign()` instead of `...styleDustbin` because of a bug with
    // Babel if using Edge (EdgeHTML) or IE 11. Works fine on modern browsers that support spread syntax.
    /*
    return (
        <div ref={drop} style={{ ...styleDustbin, backgroundColor }}>
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
    */
    return (
        <div ref={drop} style={Object.assign({}, styleDustbin, {backgroundColor:backgroundColor})}>
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
}

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

const Box = ({ name }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                const lastDropped = document.querySelector('.last-dropped')
                lastDropped.textContent = `You dropped ${item.name} into ${dropResult.name}!`
                lastDropped.style.marginBottom = '20px'
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1

    // Using `Object.assign()` instead of `...style` because of a bug with
    // Babel if using Edge (EdgeHTML) or IE 11. Works fine on modern browsers that support spread syntax.
    /*
    return (
        <div ref={drag} style={{ ...style, opacity }}>
            {name}
        </div>
    )
    */
    return (
        <div ref={drag} style={Object.assign({}, style, {opacity:opacity})}>
            {name}
        </div>
    )
}

function Example() {
    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin />
            </div>
            <div className="last-dropped"></div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Box name="Glass" />
                <Box name="Banana" />
                <Box name="Paper" />
            </div>
        </div>
    )
}

function App() {
	return (
		<>
			<h1>React DnD Demo</h1>
			<p>
				<a href="/">🏠 Back to all Examples</a>
			</p>
			<p>
				<a href="https://react-dnd.github.io/react-dnd/about" target="_blank" rel="noopener">https://react-dnd.github.io/react-dnd/about</a>
			</p>

			<section>
				<DndProvider backend={Backend}>
					<Example />
				</DndProvider>
			</section>
		</>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
