import React, { useState, useEffect } from "react";
import check from "../check.svg";
import styles from "./LoginForm.module.css";

function LoginForm() {
	const [emailInput, setEmailInput] = useState("");
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [emailHasFocus, setEmailHasFocus] = useState(false);

	const [passwordInput, setPasswordInput] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [passwordHasFocus, setPasswordHasFocus] = useState(false);

	useEffect(
		() =>
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)
				? setEmailIsValid(true)
				: setEmailIsValid(false),
		[emailInput]
	);

	useEffect(
		() =>
			passwordInput.length >= 6 && passwordInput.length <= 20
				? setPasswordIsValid(true)
				: setPasswordIsValid(false),
		[passwordInput]
	);

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formDataSerialized = Object.fromEntries(formData);
		console.log(formDataSerialized);

		async function login() {
			try {
				const response = await fetch(
					"https://hookb.in/nP0Gl6xnemtZ7QrrdVpZ",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();
				console.log(data);
			} catch (err) {
				console.error(err);
			}
		}

		login();
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div
				className={`${styles.inputGroup} ${
					emailIsValid
						? styles.valid
						: emailInput.length > 0 && styles.invalid
				}`}
			>
				<input
					type="email"
					id="email"
					name="email"
					placeholder=" "
					className={styles.input}
					value={emailInput}
					onFocus={() => setEmailHasFocus(true)}
					onBlur={() => setEmailHasFocus(false)}
					onChange={(e) => setEmailInput(e.target.value)}
					required
				/>
				<label htmlFor="email">Email</label>
				{emailIsValid && <img src={check} alt="check" />}
				{!emailIsValid && emailHasFocus && emailInput.length > 0 && (
					<p className={styles.warning}>
						Email must follow the pattern: email@domain.com
					</p>
				)}
			</div>
			<div
				className={`${styles.inputGroup} ${
					passwordIsValid
						? styles.valid
						: passwordInput.length > 0 && styles.invalid
				}`}
			>
				<input
					type="password"
					id="password"
					name="password"
					placeholder=" "
					className={styles.input}
					value={passwordInput}
					onFocus={() => setPasswordHasFocus(true)}
					onBlur={() => setPasswordHasFocus(false)}
					onChange={(e) => setPasswordInput(e.target.value)}
					required
				/>
				<label htmlFor="password">Password</label>
				{passwordIsValid && <img src={check} alt="check" />}
				{!passwordIsValid &&
					passwordHasFocus &&
					passwordInput.length > 0 && (
						<p className={styles.warning}>
							Password must be between 6 and 20 characters
						</p>
					)}
			</div>
			<button
				type="submit"
				className={styles.login}
				disabled={!(passwordIsValid && emailIsValid)}
			>
				Login
			</button>
		</form>
	);
}

export default LoginForm;
