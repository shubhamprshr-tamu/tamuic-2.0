import React, { useState, ChangeEvent, FormEvent, useEffect, SyntheticEvent } from 'react';
import { TextField, Button, Container, Box, Autocomplete } from '@mui/material';

const LoginPage = () =>{
    const [username, setUsername] = useState<string | null>('');
    const [inputUsername, setInputUsername] = useState<string>('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userList, setUserList] = useState([]);

    
    const handleUsernameChange = (event: SyntheticEvent, value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/login')
        const responseJson = await response.json()
        console.log(responseJson)
    }

    useEffect(() =>{
        setLoading(true);
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserList(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                setIsError(false);
            })
        /*const getUserList = async() => {
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
        getUserList();*/
    }, [])

    /**
     * <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={handleUsernameChange}
                    />
     */

    return (
        <Container>
            <Box mt={8}>
                <form onSubmit={handleLogin}>
                    <Autocomplete
                        value={username} 
                        inputValue={inputUsername}
                        loading={loading}
                        options ={userList}
                        onChange={handleUsernameChange}
                        onInputChange={(event, newInputValue) => {
                            setInputUsername(newInputValue)
                        }}
                        id="username"
                        getOptionLabel={(user: any) => user.Name} // for the time being.
                        renderInput={(params) => 
                            <TextField
                                {...params}
                                variant="outlined"
                                margin="normal"
                                label="Username"
                                autoFocus
                            />
                        }
                    />  
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
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
            
        </Container>
    )
}
// { username && <div>username logged in.</div> }
export default LoginPage;