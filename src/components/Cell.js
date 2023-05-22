

function Cell({text,index,handlePress})
{


    return (
        <button onClick={() => handlePress(index)}>{text}</button>
    )
}

export default Cell