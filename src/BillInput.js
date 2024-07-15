export default function BillInput({bill, onSetBill, children}){
    
    return <div>
        <label>{children}</label>
        <input type='text' placeHolder ='Enter the bill amount' value={bill} onChange={(e)=>onSetBill(Number(e.target.value))} />
    </div>
}