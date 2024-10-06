import React, { useState } from "react";
import '../../styling/form.css';

interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

interface FormProps {
  title: string;
  fields: FormField[];
}

const Form = ({ title, fields }: FormProps) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-section">
                    <h3 className="form-title">{title}</h3>
                    {fields.map((field) => (
                        <div key={field.id} className="form-group">
                            <label htmlFor={field.id}>{field.label}{field.required && '*'}</label>
                            <input 
                                type={field.type}
                                id={field.id}
                                value={formData[field.id] || ''}
                                onChange={handleInputChange}
                                required={field.required}
                            />
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Form;