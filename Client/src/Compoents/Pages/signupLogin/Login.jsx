import React, { useState } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import Navbar from "./../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../../Redux/Auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { token } = useSelector((state) => state.Auth);
	console.log(token);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmitHandler = () => {
		dispatch(loginAPI({ email, password }));
		if (token !== null) {
			navigate("/home");
		}
	};

	return (
		<Box w='100%' h='130vh'>
			<Box>
				<Navbar />
			</Box>
			<Text className='txt'>Log in to Everhour</Text>

			<Box className='log'>
				<Box className='bt'>
					<Box w={"40%"}>
						<Button>
							<FcGoogle size={"25px"} />
							Login via Google
						</Button>
					</Box>
					<Box w={"40%"}>
						<Button>
							<BsApple size={"25px"} />
							Login via Apple
						</Button>
					</Box>
				</Box>

				<Box w='90%' margin={"auto"} p='2rem'>
					<label>Email</label>
					<Input
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						borderRadius={"0px"}
						mt='10px'
					/>

					<Box mt='20px'>
						<label> Password</label>
						<Input
							placeholder='Password'
							borderRadius={"0px"}
							mt='10px'
							required='true'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Box>

					<Text textAlign='end' textDecoration={"underline"} mt='10px'>
						Forget password?
					</Text>

					<Box p={"1rem"}>
						<Button
							fontWeight={400}
							p='1.5rem'
							bg='#57bb71'
							w='100%'
							onClick={onSubmitHandler}
						>
							Log in
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;

/* 
font-family: "GT Haptik Medium", sans-serif;
    font-weight: 400;
    line-height: 1.1;
    font-size: clamp(2.25rem, 4.2vw, 4.5rem);
    color: rgb(255, 243, 237);   */
