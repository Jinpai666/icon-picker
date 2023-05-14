import { Container } from "./components/styles/Container.styled"
import { GlobalStyles } from "./components/styles/Global";
import Picker from "./components/Picker";
import PickerHeader from "./components/PickerHeader";


const App = () => {
    return (
            <Container>
                <PickerHeader/>

                <GlobalStyles/>
                <Picker/>
            </Container>
    )
}
export default App
