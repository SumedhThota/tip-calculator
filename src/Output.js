export default function Output ({bill, tip}){
    return <div>
        <h2>You pay ${bill + tip}(${bill} + ${tip})</h2>
    </div>
}