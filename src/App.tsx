import PickerColumn from "./components/pickerColumn";



const App = () => {

    return (
        <div>
           <PickerColumn
               icon="icon1"
                title="title1"
                message="message1"
           />
            <PickerColumn
                icon="icon2"
                title="title2"
                message="message2"
            />
            <PickerColumn
                icon="icon3"
                title="title3"
                message="message3"
            />
        </div>
    )
}

export default App
