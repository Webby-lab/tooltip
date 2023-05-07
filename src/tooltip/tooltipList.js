import ToolTip from "./tooltip";



const TooltipList = ({data}) => {

    const elements = data.map(item => {
        return (
            <ToolTip {...item}/>
        )
    })

return (
    <ul>
        {elements}
    </ul>
)

}

export default TooltipList;