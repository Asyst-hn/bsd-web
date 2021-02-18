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
	const { setUserId, setIsAuthenticated } = useAuth();
	const { setAlert } = useNotifications();

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		defaultValues: { username: '', password: '' }
	});

	const { mutate, isLoading, isError, error } = useMutation(
		(body: any) =>
			api({
				path: `Glb_usuarios/VerifyLogin/${body.username}&${body.password}`,
				method: 'GET'
			}),
		{
			onSuccess: res => {
				setUserId(res.data.userId);
				setIsAuthenticated(true);
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
					placeholder='Usuario'
					autoComplete='username email'
					name='username'
					error={!!errors.username}
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
						Usuario o contraseña incorrecto
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
