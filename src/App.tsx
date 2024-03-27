import {Compatible, ReactGrid, TextCell, TextCellTemplate} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const cells = [
    {
        type: 'text',
        text: 'Hello World',
    } satisfies TextCell
];

class CustomCell extends TextCellTemplate {
    render(cell: Compatible<TextCell>, isInEditMode: boolean, onCellChanged: (cell: Compatible<TextCell>, commit: boolean) => void): React.ReactNode {
        if (isInEditMode) {
            return <DatePicker />;
        }
        return super.render(cell, isInEditMode, onCellChanged);
    }
}

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ReactGrid columns={[{columnId: '1', width: 300}]} rows={[
                {
                    rowId: '1',
                    height: 70,
                    cells: cells
                }
            ]} customCellTemplates={{
                text: new CustomCell()
            }}/>
            <p>
                Go to edit the cell to see the issue.
            </p>
            <p>
                The date picker is supposed to look like this:
            </p>
            <DatePicker/>
        </LocalizationProvider>
    )
}

export default App
