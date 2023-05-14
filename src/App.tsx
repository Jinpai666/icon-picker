import { Container } from "./components/styles/Container.styled"
import { GlobalStyles } from "./components/styles/Global";
import Picker from "./components/Picker";

const App = () => {
    return (
            <Container>
                <GlobalStyles/>
                <Picker/>
            </Container>
    )
}
export default App
