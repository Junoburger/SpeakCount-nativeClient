import t from "tcomb-form-native";

const Person = t.struct({
    email: t.String
});

export const formOptions = {
    fields: {
        email: {
            keyboardType: 'email-address', // change keyboard layout to email input
            autoCapitalize: 'none', // start email addresses with lower-case
        }
    }
}


export default Person;