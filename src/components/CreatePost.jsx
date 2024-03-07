import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreatePost() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ content: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

}