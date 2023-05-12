import PickerColumn from "./components/PickerColumn";



const App = () => {

    return (
        <div>
           <PickerColumn
                title="title1"
                message="message1"
           />
            <PickerColumn
                title="title2"
                message="message2"
            />
            <PickerColumn
                title="title3"
                message="message3"
            />
        </div>
    )
}

export default App
