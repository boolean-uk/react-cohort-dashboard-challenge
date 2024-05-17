import './formSection.css'

export default function FormSection(props) {
    return (
        <section className='form-section'>
            <h3>{props.title}</h3>
            {props.children}
        </section>
    )
}