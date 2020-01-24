    import axios from "axios";

    const Input = props => (
    <input {...props} style={{ padding: "10px 20px", margin: "10px 0", fontSize: '24px' }} />
    );

    const getFieldByType = ({ type, ...props }) => {
    const types = {
        phone_number: <Input type="tel " {...props} />,
        short_text: <Input type="text " {...props} />
    };

    return types[type];
    };

    const Index = ({ form }) => (
    <form style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
        {form.fields.map(({ type, title }) =>
        getFieldByType({ type, placeholder: title })
        )}
        <button type="submit" style={{ padding: "10px 20px", fontSize: '24px' }}>
        Enviar
        </button>
    </form>
    );

    Index.getInitialProps = async _ => {
    const AUTH_TOKEN = "your_token";
    const FORM_ID = "your form_id";
    const URL = `https://api.typeform.com/forms/${FORM_ID}`;

    const res = await axios.get(URL, {
        headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
        }
    });

    return { form: res.data };
    };

    export default Index;
