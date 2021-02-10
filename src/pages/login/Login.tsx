import React, { useEffect } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { api } from '../../utils/api';
import { loginStyles } from './styles';
import { useNotifications } from '../../context/notifications';

export const Login: React.FC = () => {
	const classes = loginStyles();
	const history = useHistory();
	const { addToken, onMount } = useAuth();
	const { setAlert } = useNotifications();

	useEffect(() => onMount(history), []);

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		defaultValues: { email: '', password: '' }
	});

	const { mutate, isLoading, isError, error } = useMutation(
		(body: any) =>
			api({
				path: '/users/login',
				method: 'POST',
				body
			}),
		{
			onSuccess: res => {
				addToken(res.data.token);
				setAlert('Ha ingresado exitosamente', 'success');
				history.push('/app');
			}
		}
	);

	const loginHandler = async (data: any) => mutate(data);

	return (
		<Grid container className={classes.root}>
			<form
				onSubmit={handleSubmit(loginHandler)}
				className={classes.form}
				noValidate
			>
				<TextField
					variant='outlined'
					placeholder='Correo Electronico'
					autoComplete='username email'
					name='email'
					error={!!errors.email}
					inputRef={register({ required: true })}
					size='small'
					className={classes.input}
				/>
				<TextField
					variant='outlined'
					type='password'
					placeholder='Contraseña'
					autoComplete='password'
					name='password'
					error={!!errors.password}
					inputRef={register({ required: true })}
					size='small'
					className={classes.input}
				/>

				{isError ? (
					<p className={classes.inputError}>
						{(error as AxiosError)?.response?.data.message}
					</p>
				) : (
					''
				)}

				<Button
					variant='contained'
					type='submit'
					className={classes.button}
				>
					{isLoading ? 'Ingresando...' : 'Ingresar'}
				</Button>
			</form>
		</Grid>
	);
};
