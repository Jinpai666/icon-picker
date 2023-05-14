import  { FC } from 'react';
import {Header} from "./styles/Header.styled"


const PickerHeader: FC = () => {

    return (
        <Header>
            <h1>Icon Picker</h1>
            <p>How to use:</p>
          <ol>
              <li>Put title in</li>
              <li>Change order of columns to your liking.<br/>(Drag & drop)</li>
              <li>Choose an Icon</li>
              <li>Insert Text</li>
              <li>Save to PDF</li>

          </ol>
        </Header>
    )
}

export default PickerHeader;
