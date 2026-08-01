import BoardForm from "./BoardForm";
import BoardList from "./BoardList";
function BoardSection({onAddBoard, boards, selectBoard, toggleFormDisplayed, formDisplayed}) {
    return (
        <>
        {/* we have the handler here. the state is passed from the parent */}
       
        {/* we are deciding if we need to show the form. Below if formDisplayed is true, then we are going for the second part*/}
        {formDisplayed && <BoardForm onAddBoard = {onAddBoard}/>}
         <button onClick={toggleFormDisplayed}>{formDisplayed ? "Hide a New Board Form": "Show a New Board Form"}</button>
        <BoardList boards={boards} selectBoard = {selectBoard}/>
        </>
            
    )
}
export default BoardSection
