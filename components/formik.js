import React, { Component } from 'react';
import Router from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';

/**
 * 非同期 Varidation
 */
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('名前を入力してください'),
    email: Yup.string()
        .email('メールアドレスの形式に誤りがあります')
        .required('メールアドレスは必須です'),
    text: Yup.string()
        .required('本文を入力してください'),
});

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.defaultFormState = {
            name: '',
            email: '',
            text: ''
        }
    }

    /**
     * フォーム送信後の処理
     */
    handleSubmit (form) {
        // 値をコンソール表示
        console.log(form)
    }

    render() {
        return (
            
            <Formik
                onSubmit={this.handleSubmit}
                initialValues={this.defaultFormState}
                validationSchema={validationSchema}
            >
                
                <Form>
                    <Field
                        name="name"
                        type="name"
                        placeholder="名前"
                    />
                    <Field
                        name="email"
                        type="email"
                        placeholder="メールアドレス"
                    />
                    <Field
                        name="text"
                        type="text"
                        placeholder="本文"
                    />
                    <button type="submit">
                        送信
                    </button>
                    
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="invalidForm"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="invalidForm"
                    />
                    <ErrorMessage
                        name="text"
                        component="div"
                        className="invalidForm"
                    />
                </Form>
            </Formik>
        )
        
    }
    
}



export default RegistrationForm;