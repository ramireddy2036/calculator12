function Calculater({Operation,Caluation,Clr})
{
    return(
        <>
        <div className="row">
          <button className="key"onClick={()=>{
               Operation("7")
          }}>7</button>
          <button className="key"onClick={()=>{
               Operation("8")
          }}>8</button>
          <button className="key"
          onClick={()=>{
               Operation("9")
          }}>9</button>
          <button className="operator"
          onClick={()=>{
               Operation("/")
          }}>/</button>
        </div>
        <div className="row">
          <button className="key"onClick={()=>{
               Operation("4")
          }}>4</button>
          <button className="key"onClick={()=>{
               Operation("5")
          }}>5</button>
          <button className="key"onClick={()=>{
               Operation("6")
          }}>6</button>
          <button className="operator"onClick={()=>{
               Operation("*")
          }}>*</button>
        </div>
        <div className="row">
          <button className="key"onClick={()=>{
               Operation("1")
          }}>1</button>
          <button className="key"onClick={()=>{
               Operation("2")
          }}>2</button>
          <button className="key"onClick={()=>{
               Operation("3")
          }}>3</button>
          <button className="operator"onClick={()=>{
               Operation("-")
          }}>-</button>
        </div>
        <div className="row">
          <button className="C"onClick={()=>{
               Clr()
          }}>C</button>
          <button className="key"onClick={()=>{
               Operation("0")
          }}>0</button>
          <button className="E" onClick={()=>{
               Caluation()
          }}>=</button>
          <button className="operator"onClick={()=>{
               Operation("+")
          }}>+</button>
        </div>
        </>
    )
}
export default Calculater