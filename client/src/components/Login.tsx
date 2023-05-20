import React, { useState, ChangeEvent, FormEvent, useEffect, useContext} from 'react';
import { Typography, TextField, Button, Container, Box, Select, SelectChangeEvent, MenuItem, InputLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type User = {
    Name: string,
    UserID: number,
    Active: boolean,
    AgentID: number | null | undefined,
    Roles: string
}

const LoginPage = () =>{
    const navigate = useNavigate()
    const [username, setUsername] = useState<string | undefined>('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userList, setUserList] = useState<Array<User>>([]);
    const [isFormValid, setIsFormValid] = useState<boolean>(false)

    
    const handleUsernameChange = (event: SelectChangeEvent) => {
        setUsername(event.target.value);
        setIsFormValid(!!event.target.value && !!password)
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setIsFormValid(!!event.target.value && !!username)
    };
    
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const response = await fetch('/api/users/login',{
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseJson = await response.json();
            Cookies.set('user', responseJson.Name, {
                expires: 1/24 // expire in an hour.
            })
            Cookies.set('role', responseJson.Role, {
                expires: 1/24 // expire in an hour.
            })
            navigate('/tamuic/home');
        } catch(e){
            setIsError(true)
        }
    }

    useEffect(() =>{
        setLoading(true);
        const getUserList = async() => {
            setLoading(true);
            try {
                const response = await fetch('/api/users');
                const responseJson = await response.json();
                setUserList(responseJson);
                setLoading(false);
            } catch(e){
                setIsError(true);
            }
        }
        getUserList();
    }, [])

    useEffect(() => {
        const user = Cookies.get('user');
        const role = Cookies.get('role');
        if (user && role) navigate('/tamuic/home')
    })

    return (
        <Container sx={{display: 'flex'}}>
            <Box mt={8} sx={{maxWidth: 600, maxHeight:600, margin: 'auto'}}>
                <Typography variant='h3'>TAMU Insect Collection.</Typography>
                <form onSubmit={handleLogin}>
                    <InputLabel id='username-label'>User Name.</InputLabel>
                    <Select
                        id='username'
                        labelId='username-label'
                        value={username}
                        fullWidth
                        required
                        onChange={handleUsernameChange}
                    >
                        {   
                            loading ? (
                                <MenuItem value="">Loading Usernames..</MenuItem>
                            ) : (
                                userList.map((user, currElement) => (
                                    <MenuItem key={currElement} value={user.Name}>
                                        {user.Name}
                                    </MenuItem>
                                ))
                            )
                        }
                    </Select>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isFormValid}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage;