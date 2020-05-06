import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Logo from "../../assets/logo.svg";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "../../hooks/ToastContext";
import getValidationErrors from "../../utils/getValidationErrors";
import { AnimationContainer, Background, Container, Content } from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail é obrigatório")
            .email("Digite um email válido"),
          password: Yup.string().required("Senha obrigatória"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;
        await signIn({
          email,
          password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description:
            "Ocorreu um erro ao fazer login, cheque suas credenciais",
        });
      }
    },
    [signIn, addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="Gobarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            ></Input>
            <Button type="submit"> Entrar </Button>
            <Link to="/forgot">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
