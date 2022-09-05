import {ChangeEvent, ChangeEventHandler, MouseEvent} from "react";

export const User = () => {

    const raiseIncome = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('textarea changed')
    }

    const onFocusLost = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    return <div><textarea
        onChange={onNameChanged}
        onBlur={onFocusLost}
    >Gera</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="raise" onClick={raiseIncome}>raise income</button>
        <button name="raise x2" onClick={raiseIncome}>raise income x2</button>
    </div>
}