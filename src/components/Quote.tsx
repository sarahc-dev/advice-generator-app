import { Slip } from "./Card"

export default function Quote({ id, advice }: Slip) {
    
    return (
        <div className="quote-container">
            <p className="id">Advice #{id}</p>
            <h1 className="quote">"{advice}"</h1>
        </div>
    )
}