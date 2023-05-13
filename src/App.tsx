import PickerColumn from "./components/PickerColumn";
import { Container } from "./components/styles/Container.styled"
import { GlobalStyles } from "./components/styles/Global";


const App = () => {

    return (
        <Container>
            <GlobalStyles/>
            <PickerColumn/>
            <PickerColumn/>
            <PickerColumn/>
        </Container>
    )
}

export default App
