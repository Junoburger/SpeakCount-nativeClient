import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';

// ...

export default class SignUp extends Component {
    render() {
        const Form = t.form.Form;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In To SpeakCount</Text>

                <Form
                    ref="form"
                    type={Person}
                    options={formOptions} />
            </View>
        );
    }
}