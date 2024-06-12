# RoDB

## Project setup

```
# npm
npm install
```

### Compiles and hot-reloads for development

```
# npm
npm run dev
```

### Compiles and minifies for production

```
# npm
npm run build
```


## Test Cases

### Case #1
```
Test: Register with invalid email
Test Data: Email: aaa..a.a
Test Result: Do nothing. Console Error
```
### Case #2
```
Test: Register with correct data
Test Data: Name: User, Email: User@gmail.com, Password: user
Test Result: Route to Login page
```
### Case #3
```
Test: Login with invalid credentials
Test Data: Email: aaa@aaa.aaa, Password: aaaa
Test Result: Do nothing. Console error Invalid Credentials
```
### Case #4
```
Test: Create a game
Test Data: Name: aaa, UniverseId: 1337, RbxApiKey: Key
Test Result: Creates a game
```
### Case #5
```
Test: Logout
Test Data: -
Test Result: Logout user, routes to main page
``` 




