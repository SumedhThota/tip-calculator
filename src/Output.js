export default function Output ({bill, tip}){
    return <div>
        <h2>You pay ${bill + tip} in total (${bill} + ${tip})</h2>
    </div>
}